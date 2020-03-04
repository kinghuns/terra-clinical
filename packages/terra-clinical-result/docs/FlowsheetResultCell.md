# Terra Clinical Flowsheet Result Cell

The Clinical Result is a standardized view for single result values added to a Patient's Medical Chart. The flowsheet result cell is specifically for the grid display of a result collection, and can handle displaying an indication of multiple results.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
```
$ npm install terra-clinical-result
```

<!-- AUTO-GENERATED-CONTENT:START Peer Dependencies -->
<!-- AUTO-GENERATED-CONTENT:END -->

## Component Features

* [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)
* [LTR/RTL Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#ltr--rtl-support)

## Usage Guide

The flowsheet cell for clinical results is constructed by providing the same structured object as the clinical result in an array, allowing for multiple results to be indicated in the same time cell.

Currently the Flowsheet expects an array of one or more results - and if there are multiple, it will display the first in the array, with an indication of additional results. Updates are in progress to also look at the performedDateTime value if provided to evaluate which result is the most recent to appropriately display, regardless of which order index position in the array it is.


```jsx
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
  ```

An example of a single clinical result value:
```jsx
import React from 'react';
import { FlowsheetResultCell } from 'terra-clinical-result/lib/index';

const singleResultValue = [
  {
    eventId: '1574537491',
    result: {
      value: '101.9',
      unit: 'degC',
    },
    interpretation: 'CRITICAL',
    type: 'NUMERIC',
  },
];

export default () => (
  <FlowsheetResultCell
    resultDataSet={singleResultValue}
    hideUnit
    isModified
    hasComment
    isUnverified
  />
);
```

An example of multiple clinical blood pressure result values:
```jsx
import React from 'react';
import { FlowsheetResultCell } from 'terra-clinical-result/lib/index';
import classNames from 'classnames/bind';
import styles from '../Examples.module.scss';

const cx = classNames.bind(styles);

const multipleResultBPValues = [
  {
    id: '1577895000-1',
    systolic: {
      eventId: '1577895000-1.1',
      result: {
        value: '111',
        unit: 'mmHg',
      },
      interpretation: 'HIGH',
    },
    diastolic: {
      eventId: '1577895000-1.2',
      result: {
        value: '77',
        unit: 'mmHg',
      },
      interpretation: 'LOW',
    },
  },
  {
    id: '1577895000-2',
    systolic: {
      eventId: '1577895000-2.1',
      result: {
        value: '111',
        unit: 'mmHg',
      },
      interpretation: 'CRITICAL',
    },
    diastolic: {
      eventId: '1577895000-2.2',
      result: {
        value: '77',
        unit: 'mmHg',
      },
    },
  },
  {
    id: '1577895000-3',
    systolic: {
      eventId: '1577895000-3.1',
      result: {
        value: '111',
        unit: 'mmHg',
      },
      interpretation: 'CRITICAL',
    },
    diastolic: {
      eventId: '1577895000-3.2',
      result: {
        value: '77',
        unit: 'mmHg',
      },
    },
  },
];

export default () => (
  <FlowsheetResultCell 
    resultDataSet={multipleResultBPValues} 
    hideUnit
    isModified
    hasComment
  />
);
```
