import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import '../style/components.css';

class App extends React.Component {
  render() {
    return (
      <div id="main-container">
        <Display />
        <ButtonPanel />
      </div>
    );
  }
}


export default App;
