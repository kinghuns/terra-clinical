import React from 'react';
import { FlowsheetResultCell } from 'terra-clinical-result/lib/index';

const singleResultValue = [
  {
    eventId: '111',
    result: {
      value: '12345.678',
      unit: 'mL',
    },
  },
];

export default () => <FlowsheetResultCell resultDataSet={singleResultValue} isModified hasComment />;
