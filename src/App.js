import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
//Hello-->
class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>Hi, I am your first react App</h1>
       <p> This is really working </p>
       <Person /> 
      </div>
    );
    // return React.createElement('div',null,React.createElement('h1', {ClassName: App}, 'Does this work now'));
  }
}

export default App;
