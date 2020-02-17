const DefaultResult = {
  eventId: '111',
  result: {
    value: '12345.678',
    unit: 'mL',
  },
};

const SingleResultValue = {
  ...DefaultResult,
  conceptDisplay: 'Temperature Oral',
  datetimeDisplay: 'Nov 23, 2019 13:31:31',
};

const DecoratedResult = {
  ...DefaultResult,
  isModified: true,
  hasComment: true,
  isUnverified: true,
};

const BadData = {
  eventId: '111',
  clinicalresult: {
    value: '354.23377777758678567867856785687678567856767868678567856785678567856785678567857856785678567856785678567856785678578567856',
    unit: 'mmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHg',
  },
  interpretation: 'CRITICAL',
};

const NullResult = {
  result: {
    value: null,
  },
};

const DefaultSystolicResult = {
  eventId: '111.1',
  result: {
    value: '180',
    unit: 'mmHg',
  },
};
const DefaultDiastolicResult = {
  eventId: '111.2',
  result: {
    value: '80',
    unit: 'mmHg',
  },
};

const DefaultBloodPressureResult = {
  id: '111',
  systolic: {
    ...DefaultSystolicResult,
  },
  diastolic: {
    ...DefaultDiastolicResult,
  },
};

const DecoratedBloodpressureResult = {
  id: '111',
  systolic: {
    ...DefaultSystolicResult,
    isModified: false,
    hasComment: true,
    isUnverified: true,
  },
  diastolic: {
    ...DefaultDiastolicResult,
    isModified: true,
    hasComment: false,
    isUnverified: true,
  },
};

const ExtraDisplaysBloodpressureResult = {
  id: '111',
  systolic: {
    ...DefaultSystolicResult,
    conceptDisplay: 'Blood Pressure Systolic',
    datetimeDisplay: 'Nov 23, 2019 13:31:31',
  },
  diastolic: {
    ...DefaultDiastolicResult,
    conceptDisplay: 'Blood Pressure Diastolic',
    datetimeDisplay: 'Nov 23, 2019 13:31:44',
  },
};

const mixedBPResultValue = {
  id: '111',
  systolic: {
    ...DefaultSystolicResult,
    interpretation: 'CRITICAL',
    effectiveDateTime: '2015-02-07T13:28:17-05:00',
  },
  diastolic: {
    ...DefaultDiastolicResult,
    interpretation: 'LOW',
    effectiveDateTime: '2015-02-07T13:28:17-05:00',
  },
};

const criticalBPResultValue = {
  id: '111',
  systolic: {
    ...DefaultSystolicResult,
    interpretation: 'CRITICAL',
    effectiveDateTime: '2015-02-07T13:28:17-05:00',
  },
  diastolic: {
    ...DefaultDiastolicResult,
    interpretation: 'CRITICAL',
    effectiveDateTime: '2015-02-07T13:28:17-05:00',
  },
};

const highBPResultValue = {
  id: '111',
  systolic: {
    ...DefaultSystolicResult,
    interpretation: 'HIGH',
    effectiveDateTime: '2015-02-07T13:28:17-05:00',
  },
  diastolic: {
    ...DefaultDiastolicResult,
    interpretation: 'HIGH',
    effectiveDateTime: '2015-02-07T13:28:17-05:00',
  },
};

const lowBPResultValue = {
  id: '111',
  systolic: {
    ...DefaultSystolicResult,
    interpretation: 'LOW',
    effectiveDateTime: '2015-02-07T13:28:17-05:00',
  },
  diastolic: {
    ...DefaultDiastolicResult,
    interpretation: 'LOW',
    effectiveDateTime: '2015-02-07T13:28:17-05:00',
  },
};

const abnormalBPResultValue = {
  id: '111',
  systolic: {
    ...DefaultSystolicResult,
    interpretation: 'ABNORMAL',
    effectiveDateTime: '2015-02-07T13:28:17-05:00',
  },
  diastolic: {
    ...DefaultDiastolicResult,
    interpretation: 'ABNORMAL',
    effectiveDateTime: '2015-02-07T13:28:17-05:00',
  },
};

const InterpretationBPResultsArray = [
  mixedBPResultValue,
  criticalBPResultValue,
  highBPResultValue,
  lowBPResultValue,
  abnormalBPResultValue,
];

export default DefaultResult;
export {
  SingleResultValue,
  DecoratedResult,
  BadData,
  NullResult,
  DefaultSystolicResult,
  DefaultDiastolicResult,
  DefaultBloodPressureResult,
  DecoratedBloodpressureResult,
  ExtraDisplaysBloodpressureResult,
  InterpretationBPResultsArray,
};
