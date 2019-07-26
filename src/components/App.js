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
  }

  handleClick = (buttonName) => {
    const prevState = this.state;
    console.log(calculate(prevState, buttonName));
    this.setState(calculate(prevState, buttonName));
  }

  render() {
    const { total, next, operation} = this.state;
    return (
      <div id="main-container">
        <Display result={total} />
        <ButtonPanel clickHandler={(buttonName) => this.handleClick(buttonName)} />
      </div>
    );
  }
}

export default App;
