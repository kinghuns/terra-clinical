# Terra Clinical Result Blood Pressure

The Clinical Result is a standardized view for single result values added to a Patient's Medical Chart. This is specifically for Blood Pressure Vital Sign results.

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

The blood pressure result is constructed similarly to the single clinical result by providing structured object with a specific construction that follows a similar pattern to the [HL7 FHIR Observation Blood Pressure](https://www.hl7.org/fhir/observation-example-bloodpressure.html) example.
```jsx
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
    systolic: PropTypes.shape({
      /**
       *  Event ID for result
       */
      eventId: PropTypes.string,
      /**
       *  Value and optional Unit of Measure for the Observation Result
       */
      result: PropTypes.shape([
       /**
        *  Value for an Observation Result
        */
        value: PropTypes.oneOfType([number, string, object]).isRequired,
        /**
         *  Unit of Measure representation for an Observation Result
         */
        unit: PropTypes.string,
      ]),
    ]),
    /**
     *  Diastolic Result for blood pressure.
     */
    diastolic: PropTypes.shape({
      /**
       *  Event ID for result
       */
      eventId: PropTypes.string,
      /**
       *  Value and optional Unit of Measure for the Observation Result
       */
      result: PropTypes.shape([
        /**
         *  Value for an Observation Result
         */
        value: PropTypes.oneOfType([number, string, object]).isRequired,
        /**
         *  Unit of Measure representation for an Observation Result
         */
        unit: PropTypes.string,
      ]),
    }),
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
 }),
```

An example of a single blood pressure result value:
```jsx
import React from 'react';
import { ClinicalResultBloodPressure } from 'terra-clinical-result/lib/index';

const bloodpressureResultValue = {
  id: '1577836800',
  systolic: {
    eventId: '1577836800.1',
    result: {
      value: '180',
      unit: 'mmHg',
    },
    interpretation: 'CRITICAL',
    type: 'BLOODPRESSURE',
  },
  diastolic: {
    eventId: '1577836800.2',
    result: {
      value: '60',
      unit: 'mmHg',
    },
    interpretation: 'LOW',
    type: 'BLOODPRESSURE',
  }
};

export default () => (
  <ClinicalResultBloodPressure
    resultData={bloodpressureResultValue}
    hideUnit
    isTruncated
    isUnverified
    isModified
    hasComment
    conceptDisplay="Blood Pressure Systolic / Blood Pressure Diastolic"
    datetimeDisplay="Nov 23, 2019 13:31:31"
  />
);
```
