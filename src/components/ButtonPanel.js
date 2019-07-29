import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = ({ clickHandler }) => {
  const spreadProps = (buttonName, color = 'orange', wide = false) => {
    const callback = () => clickHandler(buttonName);
    const props = {
      clickHandler: callback,
      name: buttonName,
      color,
      wide,
    };
    return props;
  };

  return (
    <div className="button-panel">
      <div className="button-panel-row">
        <Button {...spreadProps('AC', 'gray')} />
        <Button {...spreadProps('+/−', 'gray')} />
        <Button {...spreadProps('%', 'gray')} />
        <Button {...spreadProps('÷')} />
      </div>
      <div className="button-panel-row">
        <Button {...spreadProps('7', 'gray')} />
        <Button {...spreadProps('8', 'gray')} />
        <Button {...spreadProps('9', 'gray')} />
        <Button {...spreadProps('×')} />
      </div>
      <div className="button-panel-row">
        <Button {...spreadProps('4', 'gray')} />
        <Button {...spreadProps('5', 'gray')} />
        <Button {...spreadProps('6', 'gray')} />
        <Button {...spreadProps('−')} />
      </div>
      <div className="button-panel-row">
        <Button {...spreadProps('1', 'gray')} />
        <Button {...spreadProps('2', 'gray')} />
        <Button {...spreadProps('3', 'gray')} />
        <Button {...spreadProps('+')} />
      </div>
      <div className="button-panel-row">
        <Button {...spreadProps('0', 'gray', true)} />
        <Button {...spreadProps('.', 'gray')} />
        <Button {...spreadProps('=')} />
      </div>
    </div>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
