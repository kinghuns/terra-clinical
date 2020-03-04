import PropTypes from 'prop-types';

const valueQuantityPropShape = PropTypes.shape({
  /**
   *  Value for an Observation Result,
   *  can be Numeric value, String, or uses Object to set `null` as Value for an Observation Result with no data
   */
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.object, PropTypes.string]),
  /**
   *  Unit of Measure representation for an Observation Result
   */
  unit: PropTypes.string,
});

export default valueQuantityPropShape;
