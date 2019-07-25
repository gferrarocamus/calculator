import React from 'react';
import Button from './Button';

const ButtonPanel = (props) => {
  return (
    <div className='button-panel'>
      <div className='button-panel-row'>
        <Button color='gray' name='AC' />
        <Button color='gray' name='+/−' />
        <Button color='gray' name='%' />
        <Button name='÷' />
      </div>
      <div className='button-panel-row'>
        <Button color='gray' name='7' />
        <Button color='gray' name='8' />
        <Button color='gray' name='9' />
        <Button name='×' />
      </div>
      <div className='button-panel-row'>
        <Button color='gray' name='4' />
        <Button color='gray' name='5' />
        <Button color='gray' name='6' />
        <Button name='−' />
      </div>
      <div className='button-panel-row'>
        <Button color='gray' name='1' />
        <Button color='gray' name='2' />
        <Button color='gray' name='3' />
        <Button name='+' />
      </div>
      <div className='button-panel-row'>
        <Button wide={true} color='gray' name='0' />
        <Button color='gray' name='.' />
        <Button name='=' />
      </div>
    </div>
  );
}

export default ButtonPanel;
