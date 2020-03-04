import React from 'react';
import { ClinicalResultBloodPressure } from 'terra-clinical-result/lib/index';
import classNames from 'classnames/bind';
import styles from '../Examples.module.scss';

const cx = classNames.bind(styles);

const setofResultValues = [];

const mixedBPResultValue = {
  id: '111',
  systolic: {
    eventId: '111.1',
    result: {
      value: '180',
      unit: 'mmHg',
    },
    interpretation: 'CRITICAL',
  },
  diastolic: {
    eventId: '111.2',
    result: {
      value: '60',
      unit: 'mmHg',
    },
    interpretation: 'LOW',
  },
};

const criticalBPResultValue = {
  id: '111',
  systolic: {
    eventId: '111.1',
    result: {
      value: '180',
      unit: 'mmHg',
    },
    interpretation: 'CRITICAL',
  },
  diastolic: {
    eventId: '111.2',
    result: {
      value: '120',
      unit: 'mmHg',
    },
    interpretation: 'CRITICAL',
  },
};

const highBPResultValue = {
  id: '111',
  systolic: {
    eventId: '111.1',
    result: {
      value: '140',
      unit: 'mmHg',
    },
    interpretation: 'HIGH',
  },
  diastolic: {
    eventId: '111.2',
    result: {
      value: '90',
      unit: 'mmHg',
    },
    interpretation: 'HIGH',
  },
};

const lowBPResultValue = {
  id: '111',
  systolic: {
    eventId: '111.1',
    result: {
      value: '88',
      unit: 'mmHg',
    },
    interpretation: 'LOW',
  },
  diastolic: {
    eventId: '111.2',
    result: {
      value: '60',
      unit: 'mmHg',
    },
    interpretation: 'LOW',
  },
};

const abnormalBPResultValue = {
  id: '111',
  systolic: {
    eventId: '111.1',
    result: {
      value: '100',
      unit: 'mmHg',
    },
    interpretation: 'ABNORMAL',
  },
  diastolic: {
    eventId: '111.2',
    result: {
      value: '100',
      unit: 'mmHg',
    },
    interpretation: 'ABNORMAL',
  },
};

setofResultValues.push(<div className={cx('bottom-space')}><ClinicalResultBloodPressure resultData={criticalBPResultValue} /></div>);
setofResultValues.push(<div className={cx('bottom-space')}><ClinicalResultBloodPressure resultData={highBPResultValue} /></div>);
setofResultValues.push(<div className={cx('bottom-space')}><ClinicalResultBloodPressure resultData={lowBPResultValue} /></div>);
setofResultValues.push(<div className={cx('bottom-space')}><ClinicalResultBloodPressure resultData={abnormalBPResultValue} /></div>);
setofResultValues.push(<div><ClinicalResultBloodPressure resultData={mixedBPResultValue} /></div>);

export default () => setofResultValues;
