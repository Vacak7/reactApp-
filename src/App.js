import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons:[
      { name: 'Max', age: 28},
      { name: 'Manu', age: 42},
      { name: 'Stephanie', age: 29}

    ]
  }
  switchNameHandler = () => {
    // console.log('clicked');
    // dont use this: this.state.persons[0].name = 'Laszlo'; 
    this.setState( {
      persons:[
        { name: 'Laszlo', age: 28},
        { name: 'Manu', age: 42},
        { name: 'Stephanie', age: 26}
      ]
    } )
  }

  render() {
    return (
      <div className="App">
       <h1>REACT JS and REACT 16 </h1>
       <p> Bulding blocks </p>
       <button onClick= {this.switchNameHandler}> Switch Name </button> 
       <Person  name= {this.state.persons[0].name} age= {this.state.persons[0].age}/>
       <Person  name= {this.state.persons[1].name} age= {this.state.persons[1].age}>
       My hobbies: Racing</Person> 
       <Person  name= {this.state.persons[2].name} age= {this.state.persons[2].age}/>
      </div>
    );
    // return React.createElement('div',null,React.createElement('h1', {ClassName: App}, 'Does this work now'));
  }
}

export default App;
