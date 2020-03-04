import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';
import classNames from 'classnames/bind';
import IconComment from 'terra-icon/lib/icon/IconComment';
import IconModified from 'terra-icon/lib/icon/IconModified';
import IconUnverified from 'terra-icon/lib/icon/IconDiamond';
import ClinicalResult from '../ClinicalResult';
import ClinicalResultBloodPressure from '../ClinicalResultBloodPressure';
import observationPropShape from '../proptypes/observationPropTypes';
import EnteredInError from '../common/other/_EnteredInError';
import ResultError from '../common/other/_ResultError';
import NoData from '../common/other/_KnownNoData';
import NumericOverflow from '../common/other/_NumericOverflow';
import { isNotEmpty, checkIsStatusInError, checkResultType } from '../common/utils';
import styles from './FlowsheetResultCell.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   *  A set of clinical results.                                                          .
   */
  resultDataSet: PropTypes.arrayOf(PropTypes.shape({
    /**
     *  A single clinical result or blood pressure result id.
     */
    id: PropTypes.string,
    /**
     *  A single clinical result or blood pressure result.
     */
    resultData: observationPropShape,
  })),
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
   * The padding styling to apply to the Time Column Header Cell.
   * One of `'compact'`, `'standard'`, `'none'`.
   */
  paddingStyle: PropTypes.oneOf(['compact', 'standard', 'none']),
  /**
   * @private
   * The intl object to be injected for translations.
   */
  intl: intlShape.isRequired,
};

const defaultProps = {
  resultDataSet: [],
  hideUnit: false,
  paddingStyle: 'compact',
  hasResultError: false,
  hasResultNoData: false,
};

const createEndIcons = (isUnverified, isModified, hasComment, resultKeyID) => {
  if (!isUnverified && !isModified && !hasComment) {
    return null;
  }
  let iconElements;
  if (isUnverified) {
    iconElements = <IconUnverified className={cx('icon-unverified')} />;
  } else {
    iconElements = (
      <React.Fragment>
        {hasComment ? (<IconComment className={cx('icon-comment')} />) : null}
        {isModified ? (<IconModified className={cx('icon-modified')} />) : null}
      </React.Fragment>
    );
  }
  return (
    <div key={(`EndAccessoryIcons-${resultKeyID}`)} className={cx('end-accessory-icons')}>
      <div className={cx('end-accessory-stack')}>
        {iconElements}
      </div>
    </div>
  );
};

const createEndAdditionalResultsStack = (count, interpretationsArr, hasAccessoryIcons, resultKeyID) => {
  const displayCount = count;
  if (displayCount < 1) {
    return null;
  }
  let additionalResultInterpretationIndicator;
  if ([
    'CRITICAL',
    'EXTREMEHIGH',
    'EXTREMELOW',
    'PANICHIGH',
    'PANICLOW',
    'VABNORMAL',
  ].some(r => interpretationsArr.indexOf(r) >= 0)) {
    additionalResultInterpretationIndicator = 'CRITICAL';
  } else if ([
    'POSITIVE',
    'ABNORMAL',
    'HIGH',
    'LOW',
  ].some(r => interpretationsArr.indexOf(r) >= 0)) {
    additionalResultInterpretationIndicator = 'HIGH';
  }
  const additionalResultClassNames = cx([
    'additional-end-display',
    { 'no-accessory-icons': !hasAccessoryIcons },
    { 'interpretation-critical': additionalResultInterpretationIndicator === 'CRITICAL' },
    { 'interpretation-high': additionalResultInterpretationIndicator === 'HIGH' },
  ]);
  const additionalCountDisplayValue = (displayCount > 99)
    ? (<span className={cx(['additional-results-value', 'additional-results-max-value'])}>99+</span>)
    : (<span className={cx('additional-results-value')}>{displayCount}</span>);
  return (
    <div key={(`AdditionalResultsDisplay-${resultKeyID}`)} className={additionalResultClassNames}>
      <div className={cx('additional-results-stack')}>
        {additionalCountDisplayValue}
        {additionalCountDisplayValue}
      </div>
    </div>
  );
};

const createClinicalResultDisplay = (children, hasUnverifiedIcon, hasInterpretationIcon, containerDivRef, resultKeyID) => {
  const primaryResultClassnames = cx([
    'primary-display',
    { unverified: hasUnverifiedIcon },
    { interpretation: hasInterpretationIcon },
  ]);
  return (<div key={(`ClinicalResultDisplay-${resultKeyID}`)} className={primaryResultClassnames} ref={containerDivRef}>{children}</div>);
};

const createStandardResultDisplay = (resultDataItem, hideUnit, isUnverified, hasInterpretationIcon, resultKeyID, numericOverflow, containerDivRef) => {
  const {
    status,
  } = resultDataItem;
  let resultsInnerDisplay;
  const isStatusInError = isNotEmpty(status) ? checkIsStatusInError(status) : false;
  if (isStatusInError) {
    resultsInnerDisplay = <EnteredInError />;
  } else if (numericOverflow) {
    resultsInnerDisplay = <NumericOverflow />;
  } else {
    resultsInnerDisplay = <ClinicalResult key={(`ClinicalResult-${resultKeyID}`)} resultData={resultDataItem} hideUnit={hideUnit} isTruncated />;
  }
  const clinicalResultDisplay = createClinicalResultDisplay(resultsInnerDisplay, isUnverified, hasInterpretationIcon, containerDivRef, resultKeyID);
  return clinicalResultDisplay;
};

const createBloodPressureResultDisplay = (resultDataItem, hideUnit, isUnverified, hasInterpretationIcon, resultKeyID, numericOverflow, containerDivRef) => {
  const {
    systolic,
    diastolic,
  } = resultDataItem;
  let resultsInnerDisplay;
  const isStatusInError = {
    systolic: isNotEmpty(systolic) ? checkIsStatusInError(systolic.status) : false,
    diastolic: isNotEmpty(diastolic) ? checkIsStatusInError(diastolic.status) : false,
  };
  if (isStatusInError.systolic || isStatusInError.diastolic) {
    resultsInnerDisplay = <EnteredInError />;
  } else {
    resultsInnerDisplay = (<ClinicalResultBloodPressure key={(`ClinicalResultBloodPressure-${resultKeyID}`)} resultData={resultDataItem} hideUnit={hideUnit} isTruncated />);
  }
  const clinicalResultDisplay = createClinicalResultDisplay(resultsInnerDisplay, isUnverified, hasInterpretationIcon, containerDivRef, resultKeyID);
  return clinicalResultDisplay;
};

const setResultKeyID = (isBloodPressureResult, resultData) => {
  if (isBloodPressureResult) {
    if (resultData.id) {
      return resultData.id;
    }
    if (isNotEmpty(resultData.systolic) && resultData.systolic.eventId) {
      return resultData.systolic.eventId;
    }
    if (isNotEmpty(resultData.diastolic) && resultData.diastolic.eventId) {
      return resultData.diastolic.eventId;
    }
  } else {
    if (resultData.id) {
      return resultData.id;
    }
    if (resultData.eventId) {
      return resultData.eventId;
    }
  }
  return null;
};

const unpackResultDataSet = (resultDataSet) => {
  const systolicData = resultDataSet[0].systolic;
  const diastolicData = resultDataSet[0].diastolic;
  const isfirstBloodPressureResult = (isNotEmpty(diastolicData) || isNotEmpty(systolicData)) || false;
  let hasInterpretationIcon = false;
  if (isfirstBloodPressureResult) {
    if (isNotEmpty(systolicData)) {
      hasInterpretationIcon = !!(systolicData.interpretation);
    }
  } else {
    hasInterpretationIcon = !!(resultDataSet[0].interpretation);
  }
  const resultKeyID = setResultKeyID(isfirstBloodPressureResult, resultDataSet[0]);
  return {
    isfirstBloodPressureResult,
    hasInterpretationIcon,
    resultKeyID,
  };
};

const createFlowsheetResultCellDisplay = (resultDataSet, hideUnit, isUnverified, isModified, hasComment, numericOverflow, containerDivRef) => {
  const { isfirstBloodPressureResult, hasInterpretationIcon, resultKeyID } = unpackResultDataSet(resultDataSet);
  const compositeCell = [];
  if (isfirstBloodPressureResult) {
    const firstResultDisplay = createBloodPressureResultDisplay(resultDataSet[0], hideUnit, isUnverified, hasInterpretationIcon, resultKeyID, numericOverflow, containerDivRef);
    compositeCell.push(firstResultDisplay);
  } else {
    const firstResultDisplay = createStandardResultDisplay(resultDataSet[0], hideUnit, isUnverified, hasInterpretationIcon, resultKeyID, numericOverflow, containerDivRef);
    compositeCell.push(firstResultDisplay);
  }
  const additionalResultCount = resultDataSet.length - 1;
  if (additionalResultCount > 0) {
    const additionalResultInterpretations = [];
    const additionalResultList = resultDataSet.slice(1, resultDataSet.length);
    additionalResultList.forEach((result) => {
      if (isfirstBloodPressureResult) {
        const sysInterpretation = isNotEmpty(result.systolic.interpretation) ? result.systolic.interpretation : null;
        const diaInterpretation = isNotEmpty(result.diastolic.interpretation) ? result.diastolic.interpretation : null;
        additionalResultInterpretations.push(sysInterpretation);
        additionalResultInterpretations.push(diaInterpretation);
      } else {
        const resultInterpretation = isNotEmpty(result.interpretation) ? result.interpretation : null;
        additionalResultInterpretations.push(resultInterpretation);
      }
    });
    const displayCount = additionalResultCount + 1;
    const hasAccessoryIcons = (isUnverified || isModified || hasComment);
    const additionalResultsStackDisplay = createEndAdditionalResultsStack(displayCount, additionalResultInterpretations, hasAccessoryIcons, resultKeyID);
    compositeCell.push(additionalResultsStackDisplay);
  }
  const endAccessoryIcons = createEndIcons(isUnverified, isModified, hasComment, resultKeyID);
  compositeCell.push(endAccessoryIcons);

  return compositeCell;
};

const FlowsheetResultCell = (props) => {
  const {
    resultDataSet,
    hideUnit,
    conceptDisplay,
    datetimeDisplay,
    isTruncated,
    isUnverified,
    isModified,
    hasComment,
    hasResultError,
    hasResultNoData,
    paddingStyle,
    intl,
    ...customProps
  } = props;
  const containerDiv = useRef(null);
  const [contentWidth, setContentWidth] = useState(null);
  const [numericOverflow, setNumericOverflow] = useState(false);

  useEffect(() => {
    if (!containerDiv.current || !resultDataSet[0]) {
      return;
    }
    if (checkResultType(resultDataSet[0], 'NUMERIC')) {
      if (!contentWidth) {
        setContentWidth(containerDiv.current.children[0].getBoundingClientRect().width);
      }
      const containerWidth = containerDiv.current.getBoundingClientRect().width;
      if (containerWidth <= contentWidth && !numericOverflow) {
        setNumericOverflow(true);
      } else if (containerWidth > contentWidth) {
        setNumericOverflow(false);
      }
    }
  }, [resultDataSet, contentWidth, numericOverflow]);

  let flowsheetResultCellDisplay;

  if (hasResultError) {
    flowsheetResultCellDisplay = <div key="ClinicalResultDisplay-Error" className={cx(['primary-display', 'error'])}><ResultError /></div>;
  } else if (hasResultNoData) {
    flowsheetResultCellDisplay = <div key="ClinicalResultDisplay-NoData" className={cx('primary-display')}><NoData /></div>;
  } else if (!resultDataSet || !resultDataSet.length) {
    flowsheetResultCellDisplay = <div key="ClinicalResultDisplay-Error" className={cx(['primary-display', 'error'])}><ResultError /></div>;
  } else {
    flowsheetResultCellDisplay = createFlowsheetResultCellDisplay(resultDataSet, hideUnit, isUnverified, isModified, hasComment, numericOverflow, containerDiv);
  }

  const flowsheetCellClassNames = cx([
    'flowsheet-result-cell',
    { 'padding-standard': paddingStyle === 'standard' },
    { 'padding-compact': paddingStyle === 'compact' },
  ]);

  return (
    <div
      {...customProps}
      className={customProps.className ? `${flowsheetCellClassNames} ${customProps.className}` : flowsheetCellClassNames}
    >
      {flowsheetResultCellDisplay}
    </div>
  );
};

FlowsheetResultCell.propTypes = propTypes;
FlowsheetResultCell.defaultProps = defaultProps;

export default injectIntl(FlowsheetResultCell);
