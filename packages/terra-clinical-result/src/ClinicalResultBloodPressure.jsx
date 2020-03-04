import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';
import classNames from 'classnames/bind';
import IconModified from 'terra-icon/lib/icon/IconModified';
import IconComment from 'terra-icon/lib/icon/IconComment';
import IconUnverified from 'terra-icon/lib/icon/IconDiamond';
import Observation from './common/observation/_Observation';
import observationPropShape from './proptypes/observationPropTypes';
import ResultError from './common/other/_ResultError';
import NoData from './common/other/_KnownNoData';
import { isNotEmpty, checkIsStatusInError, ConditionalWrapper } from './common/utils';
import styles from './ClinicalResult.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Result Object with the clinical result data.
   */
  resultData: PropTypes.shape({
    /**
     *  Blood Pressure grouped result id
     */
    id: PropTypes.string,
    /**
     *  Systolic Result for blood pressure.
     */
    systolic: observationPropShape,
    /**
     *  Diastolic Result for blood pressure.
     */
    diastolic: observationPropShape,
  }),
  /**
   * Visually hides the unit of measure when presented in a series of side-by-side columns of the same unit.
   */
  hideUnit: PropTypes.bool,
  /**
   *  Display to show the full Result Name/Label Concept, e.g. `'Temperature Oral'`.
   */
  conceptDisplay: PropTypes.string,
  /**
   *  Display to show an appropriate clinically relevant documented datetime.
   */
  datetimeDisplay: PropTypes.string,
  /**
   * Whether or not the text should be truncated in display. Restricts clinical result details each to one line.
   */
  isTruncated: PropTypes.bool,
  /**
   *  If the Result value has an appended comment.
   */
  isUnverified: PropTypes.bool,
  /**
   *  If the Result value has not been authenticated and committed to patient chart.
   */
  isModified: PropTypes.bool,
  /**
   *  If the Result value has been modified from it's original value for the same clinically documented event & datetime.
   */
  hasComment: PropTypes.bool,
  /**
   * Override that shows an Error display. Used when there is a known error or problem when retrieving or assembling the clinical result data.
   */
  hasResultError: PropTypes.bool,
  /**
   * Override that shows a known "No Data" display. Used when there is known to be no value for a given clinical result concept at a specific datetime.
   */
  hasResultNoData: PropTypes.bool,
  /**
   * @private
   * The intl object to be injected for translations.
   */
  intl: intlShape.isRequired,
};

const defaultProps = {
  resultData: {},
  hideUnit: false,
  conceptDisplay: undefined,
  datetimeDisplay: undefined,
  isTruncated: false,
  isUnverified: false,
  isModified: false,
  hasComment: false,
  hasResultError: false,
  hasResultNoData: false,

};

const ClinicalResultBloodPressure = (props) => {
  const {
    resultData,
    hideUnit,
    conceptDisplay,
    datetimeDisplay,
    isTruncated,
    isUnverified,
    isModified,
    hasComment,
    hasResultError,
    hasResultNoData,
    intl,
    ...customProps
  } = props;

  let clinicalResultBloodPressureDisplay = null;

  if (hasResultError) {
    clinicalResultBloodPressureDisplay = <ResultError />;
  } else if (hasResultNoData) {
    clinicalResultBloodPressureDisplay = <NoData />;
  } else {
    const CompareTemplate = (s = null, d = null) => ({
      systolic: s,
      diastolic: d,
    });
    const compareUnits = new CompareTemplate();
    const compareStatusIsInError = new CompareTemplate();

    let iconGroupDisplayElement = null;
    let conceptDisplayElement = null;
    let datetimeDisplayElement = null;
    const decoratedResultDisplay = [];

    const hasSystolic = resultData.systolic;
    const noDataSystolic = (hasSystolic && resultData.systolic.resultNoData === true);
    if (hasSystolic && !noDataSystolic) {
      const {
        result = null,
        status = null,
      } = hasSystolic;

      if (isNotEmpty(result.unit)) { compareUnits.systolic = result.unit.trim().toLowerCase(); }
      if (isNotEmpty(status)) { compareStatusIsInError.systolic = checkIsStatusInError(status); }
    }

    const hasDiastolic = resultData.diastolic;
    const noDataDiastolic = (hasDiastolic && resultData.diastolic.resultNoData === true);
    if (hasDiastolic && !noDataDiastolic) {
      const {
        result = null,
        status = null,
      } = hasDiastolic;

      if (isNotEmpty(result.unit)) { compareUnits.diastolic = result.unit.trim().toLowerCase(); }
      if (isNotEmpty(status)) { compareStatusIsInError.diastolic = checkIsStatusInError(status); }
    }

    if (hasSystolic || hasDiastolic) {
      if ((compareUnits.systolic === compareUnits.diastolic) && !compareStatusIsInError.systolic) {
        const systolicDisplay = (
          <Observation
            key={`Observation-Systolic-${resultData.systolic.eventId}`}
            eventId={resultData.systolic.eventId}
            result={resultData.systolic.result}
            interpretation={!compareStatusIsInError.systolic ? resultData.systolic.interpretation : null}
            isUnverified={isUnverified}
            hideUnit
          />
        );
        decoratedResultDisplay.push(systolicDisplay);
      } else {
        if (!hasSystolic) decoratedResultDisplay.push(<ResultError key={`Error-Systolic-${resultData.id}`} />);
        if (noDataSystolic) decoratedResultDisplay.push(<NoData key={`NoData-Systolic-${resultData.id}`} />);
        else if (hasSystolic) {
          const systolicDisplay = (
            <ConditionalWrapper
              key={`del-Systolic-${hasSystolic.eventId}`}
              condition={compareStatusIsInError.systolic}
              wrapper={children => <del>{children}</del>}
            >
              <Observation
                key={`Observation-Systolic-${resultData.systolic.eventId}`}
                eventId={resultData.systolic.eventId}
                result={resultData.systolic.result}
                interpretation={!compareStatusIsInError.systolic ? resultData.systolic.interpretation : null}
                isUnverified={isUnverified}
                hideUnit={hideUnit}
              />
            </ConditionalWrapper>
          );
          decoratedResultDisplay.push(systolicDisplay);
        }
      }
      decoratedResultDisplay.push(<span key={`Observation-Separator-${(hasSystolic) ? hasSystolic.eventId : hasDiastolic.eventId}`} className={cx('result-display-separator')}>/</span>);
      if (!hasDiastolic) decoratedResultDisplay.push(<ResultError key={`Error-Diastolic-${resultData.id}`} />);
      else if (noDataDiastolic) decoratedResultDisplay.push(<NoData key={`NoData-Diastolic-${resultData.id}`} />);
      else if (hasDiastolic) {
        const diastolicDisplay = (
          <ConditionalWrapper
            key={`del-Diastolic-${hasDiastolic.eventId}`}
            condition={compareStatusIsInError.diastolic}
            wrapper={children => <del>{children}</del>}
          >
            <Observation
              key={`Observation-Diastolic-${resultData.diastolic.eventId}`}
              eventId={resultData.diastolic.eventId}
              result={resultData.diastolic.result}
              interpretation={!compareStatusIsInError.diastolic ? resultData.diastolic.interpretation : null}
              isUnverified={isUnverified}
              hideUnit={hideUnit}
            />
          </ConditionalWrapper>
        );
        decoratedResultDisplay.push(diastolicDisplay);
      }

      const modifiedIconElement = isModified && !isUnverified ? (<IconModified className={cx('icon-modified')} />) : null;
      const commentIconElement = hasComment && !isUnverified ? (<IconComment className={cx('icon-comment')} />) : null;
      const unverifiedIconElement = isUnverified ? (<IconUnverified className={cx('icon-unverified')} />) : null;
      if (isModified || hasComment || isUnverified) {
        iconGroupDisplayElement = (
          <React.Fragment>
            {modifiedIconElement}
            {commentIconElement}
            {unverifiedIconElement}
          </React.Fragment>
        );
      }

      if (isNotEmpty(conceptDisplay)) {
        conceptDisplayElement = <div className={cx('concept-display')}>{conceptDisplay}</div>;
      }

      if (isNotEmpty(datetimeDisplay)) {
        datetimeDisplayElement = <div className={cx('concept-display')}>{datetimeDisplay}</div>;
      }
    }

    const decoratedResultClassnames = cx([
      'decorated-result-display',
      { truncated: isTruncated },
      { 'status-in-error': compareStatusIsInError.systolic || compareStatusIsInError.diastolic },
    ]);

    clinicalResultBloodPressureDisplay = (
      <React.Fragment>
        <div className={decoratedResultClassnames}>
          <div className={cx('result-display')}>
            {decoratedResultDisplay}
            {isTruncated ? null : iconGroupDisplayElement}
          </div>
          {isTruncated ? iconGroupDisplayElement : null}
        </div>
        {conceptDisplayElement}
        {datetimeDisplayElement}
      </React.Fragment>
    );
  }

  const clinicalResultClassnames = cx([
    'clinical-result',
    'blood-pressure-result',
  ]);

  return (
    <div
      {...customProps}
      className={customProps.className ? `${clinicalResultClassnames} ${customProps.className}` : clinicalResultClassnames}
    >
      {clinicalResultBloodPressureDisplay}
    </div>
  );
};

ClinicalResultBloodPressure.propTypes = propTypes;
ClinicalResultBloodPressure.defaultProps = defaultProps;

export default injectIntl(ClinicalResultBloodPressure);
