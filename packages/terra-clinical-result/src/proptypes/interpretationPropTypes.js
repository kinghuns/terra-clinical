import PropTypes from 'prop-types';

/**
 *  Enum for possible Result Interpretations.
 *  (also called `Clinical Severity` or `Normalcy` based on established reference ranges)
 */
const interpretationPropType = PropTypes.oneOf([
  'CRITICAL',
  'EXTREMEHIGH',
  'EXTREMELOW',
  'PANICHIGH',
  'PANICLOW',
  'VABNORMAL',
  'POSITIVE',
  'ABNORMAL',
  'HIGH',
  'LOW',
  'NORMAL',
  'NEUTRAL',
]);

export default interpretationPropType;
