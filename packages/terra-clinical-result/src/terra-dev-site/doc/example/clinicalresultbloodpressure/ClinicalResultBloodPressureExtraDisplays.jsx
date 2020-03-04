import React from 'react';
import { ClinicalResultBloodPressure } from 'terra-clinical-result/lib/index';

const bloodpressureResultValue = {
  id: '111',
  systolic: {
    eventId: '111.1',
    result: {
      value: '120',
      unit: 'mmHg',
    },
  },
  diastolic: {
    eventId: '111.2',
    result: {
      value: '80',
      unit: 'mmHg',
    },
  },
};

export default () => (
  <ClinicalResultBloodPressure
    resultData={bloodpressureResultValue}
    conceptDisplay="Blood Pressure Systolic / Blood Pressure Diastolic"
    datetimeDisplay="Nov 23, 2019 13:31:31 / Nov 23, 2019 13:31:44"
  />
);
