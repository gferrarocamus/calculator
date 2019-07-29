import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name, color, wide }) => {
  const colorClass = `${color}-bg`;
  const widthClass = wide ? 'wide' : '';
  return <div className={`button ${colorClass} ${widthClass}`}>{name}</div>;
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
};

Button.defaultProps = {
  color: 'orange',
  wide: false,
};

export default Button;
