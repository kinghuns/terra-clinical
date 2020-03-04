import React from 'react';
import ClinicalResult from 'terra-clinical-result/lib/index';
import classNames from 'classnames/bind';
import styles from '../Examples.module.scss';

const cx = classNames.bind(styles);

const singleResultValue = {
  eventId: '111',
  result: {
    value: '12345.678',
    unit: 'mL',
  },
  interpretation: 'CRITICAL',
};

export default () => (
  <div className={cx('clinical-result-fontsize-21')}>
    <ClinicalResult
      resultData={singleResultValue}
      isUnverified
      isModified
      hasComment
      conceptDisplay="Temperature Oral"
      datetimeDisplay="Nov 23, 2019 13:31:31"
    />
  </div>
);
