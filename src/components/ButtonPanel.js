import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = ({ onClick }) => {
  const spreadProps = (buttonName) => {
    const callback = () => onClick(buttonName);
    return {
      onClick: callback,
      name: buttonName,
    };
  };

  return (
    <div className="button-panel">
      <div className="button-panel-row">
        <Button color="gray" {...spreadProps('AC')} />
        <Button color="gray" {...spreadProps('+/−')} />
        <Button color="gray" {...spreadProps('%')} />
        <Button {...spreadProps('÷')} />
      </div>
      <div className="button-panel-row">
        <Button color="gray" {...spreadProps('7')} />
        <Button color="gray" {...spreadProps('8')} />
        <Button color="gray" {...spreadProps('9')} />
        <Button {...spreadProps('×')} />
      </div>
      <div className="button-panel-row">
        <Button color="gray" {...spreadProps('4')} />
        <Button color="gray" {...spreadProps('5')} />
        <Button color="gray" {...spreadProps('6')} />
        <Button {...spreadProps('−')} />
      </div>
      <div className="button-panel-row">
        <Button color="gray" {...spreadProps('1')} />
        <Button color="gray" {...spreadProps('2')} />
        <Button color="gray" {...spreadProps('3')} />
        <Button {...spreadProps('+')} />
      </div>
      <div className="button-panel-row">
        <Button wide color="gray" {...spreadProps('0')} />
        <Button color="gray" {...spreadProps('.')} />
        <Button {...spreadProps('=')} />
      </div>
    </div>
  );
};

ButtonPanel.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ButtonPanel;
