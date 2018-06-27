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
  switchNameHandler = (newName) => {
    // console.log('clicked');
    // dont use this: this.state.persons[0].name = 'Laszlo'; 
    this.setState( {
      persons:[
        { name: newName, age: 28},
        { name: 'Manu', age: 42},
        { name: 'Stephanie', age: 26}
      ]
    } )
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons:[
        { name: 'Laszlo', age: 28},
        { name: event.target.value, age: 42},
        { name: 'Stephanie', age: 26}
      ]
    } )
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'

    };
    return (
      <div className="App">
       <h1>REACT JS and REACT 16 </h1>
       <p> Bulding blocks </p>
       <button 
       style={style}
       onClick={()=> this.switchNameHandler('Laszloka!!')} > Switch Name </button> 
       <Person  
       name= {this.state.persons[0].name} 
       age= {this.state.persons[0].age}/>
       <Person  
       name= {this.state.persons[1].name} 
       age= {this.state.persons[1].age} 
       click={this.switchNameHandler.bind(this, 'Lalo')}
       changed= {this.nameChangedHandler} >
       My hobbies: Racing</Person> 
       <Person  
       name= {this.state.persons[2].name} 
       age= {this.state.persons[2].age}/>
      </div>
    );
    // return React.createElement('div',null,React.createElement('h1', {ClassName: App}, 'Does this work now'));
  }
}

export default App;
