import PropTypes from 'prop-types';
import interpretationPropType from './interpretationPropTypes';
import resultTypePropType from './resulttypePropTypes';
import statusPropType from './statusPropTypes';
import valueQuantityPropShape from './valuePropTypes';

const observationPropShape = PropTypes.shape({
  /**
   *  Event ID for result
   */
  eventId: PropTypes.string,
  /**
   *  Value and optional Unit of Measure for the Observation Result
   */
  result: valueQuantityPropShape,
  /**
   * Enum for possible Result Interpretation values (also called `Clinical Severity` and `Normalcy`).
   * One of `'CRITICAL'`, `'EXTREMEHIGH'`, `'EXTREMELOW'`, `'PANICHIGH'`, `'PANICLOW'`, `'VABNORMAL'`, `'POSITIVE'`, `'ABNORMAL'`, `'HIGH'`, `'LOW'`, `'NORMAL'`, `'NEUTRAL'`.
   */
  interpretation: interpretationPropType,
  /**
   *  Enum for possible Result Types.
   * One of `'ALPHA'`, `'MULTIALPHA'`, `'FREETEXT'`, `'NUMERIC'`, `'BLOODPRESSURE'`, `'CALCULATION'`, `'DATE'`, `'DATETIME'`, `'TIME'`, `'PROVIDER'`.
   */
  type: resultTypePropType,
  /**
   * Enum for possible Result Statuses.
   * One of `'registered'`, `'preliminary'`, `'final'`, `'amended'`, `'corrected'`, `'cancelled'`, `'entered-in-error'`, `'unknown'`.
   */
  status: statusPropType,
});

export default observationPropShape;
