import React, { Component } from 'react';
import './App.css';
import Personcard from './components/personcard';

class App extends Component {
  render(){
    return (
      <>
      <Personcard person={{firstName:"Doe",lastName:"Jane",age:45,haircolor:"Black"}} />
      <Personcard person={{firstName:"Smith",lastName:"John",age:88,haircolor:"Brown"}} />
      </>
    );
  }
}

export default App;
