import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  name, color, wide, clickHandler,
}) => {
  const colorClass = `${color}-bg`;
  const widthClass = wide ? 'wide' : '';
  return (
    <div className={`button ${colorClass} ${widthClass}`} onClick={clickHandler} children={name} />
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  wide: PropTypes.bool.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
