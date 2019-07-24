import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  return (
    <div className='button'>{props.name}</div>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Button;
