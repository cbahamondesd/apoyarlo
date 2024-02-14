import React, { Component } from 'react';
import './App.css';
import Personcard from './components/personcard';

class App extends Component {
  render(){
    return (
      <>
      <Personcard person={{firstName:"Doe",lastName:"Jane",age:45,haircolor:"Black"}} />
      <Personcard person={{firstName:"Smith",lastName:"John",age:88,haircolor:"Brown"}} />
      <Personcard person={{firstName:"Fillmore",lastName:"Millard",age:50,haircolor:"Brown"}} />
      <Personcard person={{firstName:"Smith",lastName:"Maria",age:62,haircolor:"Brown"}} />
      </>
    );
  }
}

export default App;
