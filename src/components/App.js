import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import '../style/components.css';

class App extends React.Component {
  state = {
    total: null,
    next: null,
    operation: null,
  };

  handleClick = buttonName => {
    const prevState = this.state;
    this.setState(calculate(prevState, buttonName));
  };

  stringToDisplay = () => {
    let { total, next, operation } = this.state;
    if(operation === '=') operation = '';
    return `${total || '0'}${operation || ''}${next || ''}`
  };

  render() {
    return (
      <div id="main-container">
        <Display result={this.stringToDisplay()} />
        <ButtonPanel clickHandler={buttonName => this.handleClick(buttonName)} />
      </div>
    );
  }
}

export default App;
