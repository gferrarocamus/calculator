import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  name, color, wide, clickHandler,
}) => {
  const colorClass = `${color}-bg`;
  const widthClass = wide ? 'wide' : '';
  return (
    <button
      type="button"
      tabIndex="0"
      className={`button ${colorClass} ${widthClass}`}
      onClick={clickHandler}
    >
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  wide: PropTypes.bool.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
