import PropTypes from 'prop-types';

/**
 * Enum for possible Result Types.
 */
const resultTypePropType = PropTypes.oneOf([
  'ALPHA',
  'MULTIALPHA',
  'FREETEXT',
  'NUMERIC',
  'BLOODPRESSURE',
  'CALCULATION',
  'DATE',
  'DATETIME',
  'TIME',
  'PROVIDER',
]);

export default resultTypePropType;
