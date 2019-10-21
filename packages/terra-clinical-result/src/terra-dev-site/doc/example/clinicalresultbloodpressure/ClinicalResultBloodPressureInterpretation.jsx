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
      value: '111111',
      unit: 'ml',
    },
    interpretation: 'CRITICAL',
    isModified: true,
    hasComment: true,
    resultDateTime: '10/10/2020 11:11',
  },
  diastolic: {
    eventId: '111.2',
    result: {
      value: '7777',
      unit: 'mL',
    },
    interpretation: 'LOW',
    isModified: true,
    hasComment: true,
    resultDateTime: '10/10/2020 11:11',
  },
};

const criticalBPResultValue = {
};

const highBPResultValue = {
};

const lowBPResultValue = {
};

const abnormalBPResultValue = {
};

setofResultValues.push(<div className={cx('bottom-space')}><ClinicalResultBloodPressure resultData={mixedBPResultValue} /></div>);
setofResultValues.push(<div className={cx('bottom-space')}><ClinicalResultBloodPressure resultData={mixedBPResultValue} /></div>);
setofResultValues.push(<div className={cx('bottom-space')}><ClinicalResultBloodPressure resultData={mixedBPResultValue} /></div>);
setofResultValues.push(<div><ClinicalResultBloodPressure resultData={mixedBPResultValue} /></div>);

export default () => setofResultValues;