import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import IconDocuments from 'terra-icon/lib/icon/IconDocuments';
import IconComment from 'terra-icon/lib/icon/IconComment';
import IconModified from 'terra-icon/lib/icon/IconModified';
import { elementType } from 'react-prop-types';
import styles from './ResultView.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   *  An array of one or more results.
   */
  results: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.number,
    unit: PropTypes.string,
    icon: elementType('svg'),
    color: PropTypes.string,
  })),
  /**
   *  The age display of the result. Does not handle formatting.
   */
  timeDisplay: PropTypes.string,
  /**
   *  Does the result have related documents. Adds an indicator.
   */
  hasDocument: PropTypes.bool,
  /**
   *  Has the result been modified. Adds an indicator.
   */
  isModified: PropTypes.bool,
  /**
   *  Are there comments related to the result. Adds an indicator.
   */
  hasComment: PropTypes.bool,
  /**
   *  The alignment of the component. Defaults to left.
   */
  alignment: PropTypes.oneOf(['left', 'right', 'center']),
  /**
   *  Can the result text be truncated. Defaults to true.
   */
  isTruncated: PropTypes.bool,
  /**
   *  Should the view have padding. Defaults to false.
   */
  isPadded: PropTypes.bool,
};

const defaultProps = {
  results: [],
  timeDisplay: null,
  hasDocument: false,
  hasComment: false,
  isModified: false,
  alignment: 'left',
  isTruncated: true,
  isPadded: false,
};

const resultIndicator = (icon, color) => {
  if (!icon) {
    return null;
  }
  const coloredIcon = React.cloneElement(icon, { color });
  return <span className={cx('result-view-indicator')}>{coloredIcon}</span>;
};

const resultsDiv = (results, isTruncated) => {
  if (!results || !results.length) {
    return <div className={cx('result-view-result-value-text')}>{'--'}</div>;
  }

  const resultsDivs = [];

  for (let i = 0; i < results.length; i += 1) {
    if (resultsDivs.length >= 1) {
      const separator = <span className={cx('result-view-result-separator')}>{'/'}</span>;
      resultsDivs.push(separator);
    }

    const resultValue = results[i];
    const resultIndicatorDiv = resultIndicator(resultValue.icon, resultValue.color);
    if (resultIndicatorDiv) {
      resultsDivs.push(resultIndicatorDiv);
    }

    let unitDiv = null;
    if (resultValue.unit && resultValue.unit.length > 0) {
      unitDiv = <small className={cx('result-view-result-unit')}>{resultValue.unit}</small>;
    }

    const resultValueDisplay = resultValue.value || '--';
    const resultValueTextClassName = isTruncated ? 'result-view-truncated' : 'result-view-result-value-text';

    const resultValueDiv = (<span className={cx(resultValueTextClassName)} style={{ color: resultValue.color }}>
      {resultValueDisplay}
      {unitDiv}
    </span>);

    resultsDivs.push(resultValueDiv);
  }

  return resultsDivs;
};

const ResultView = (props) => {
  const {
    results,
    timeDisplay,
    hasDocument,
    isModified,
    hasComment,
    alignment,
    isTruncated,
    isPadded,
    ...customProps } = props;

  const resultClassNames = cx('result-view', `alignment-${alignment}`, customProps.className);

  return (
    <div {...customProps} className={resultClassNames}>
      <div className={cx({ 'result-view-body--padded': isPadded })}>
        <div className={cx('result-view-result-block')}>
          {hasDocument && <IconDocuments />}
          {resultsDiv(results, isTruncated)}
          {isModified && <IconModified />}
          {hasComment && <IconComment />}
        </div>
        {timeDisplay &&
          <div className={cx('result-view-result-age')}>{timeDisplay}</div>
        }
      </div>
    </div>
  );
};

ResultView.defaultProps = defaultProps;
ResultView.propTypes = propTypes;

export default ResultView;