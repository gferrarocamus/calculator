import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const colorClass = `${props.color}-bg`;
  const widthClass = props.wide ? 'wide' : '';
  return (
    <div className={`button ${colorClass} ${widthClass}`}>{props.name}</div>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
}

Button.defaultProps = {
  color: 'orange',
  wide: false,
}

export default Button;
