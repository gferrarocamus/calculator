import React from 'react';
import './App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

class App extends React.Component {
  render(){
    return (
      <div>
        <Display />
        <ButtonPanel />
      </div>
    );
  }
}

export default App;
