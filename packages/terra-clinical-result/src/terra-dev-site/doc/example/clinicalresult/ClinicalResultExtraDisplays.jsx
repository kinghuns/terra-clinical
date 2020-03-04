import React from 'react';
import ClinicalResult from 'terra-clinical-result/lib/index';

const singleResultValue = {
  eventId: '111',
  result: {
    value: '12345.678',
    unit: 'mL',
  },
};

export default () => <ClinicalResult resultData={singleResultValue} conceptDisplay="Temperature Oral" datetimeDisplay="Nov 23, 2019 13:31:31" />;
