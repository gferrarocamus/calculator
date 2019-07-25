import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  name, color, wide, onClick,
}) => {
  const colorClass = `${color}-bg`;
  const widthClass = wide ? 'wide' : '';
  return (
    <div className={`button ${colorClass} ${widthClass}`} onClick={onClick}>
      {name}
    </div>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  color: 'orange',
  wide: false,
};

export default Button;
