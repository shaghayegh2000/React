import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    console.log("App.js - constructor()");
    this.state = {date : new Date() , showClock : true , color : false};
  }
  static getDerivedStateFromProps(props , state){
    
  }
  render() {
    return (
      <div className='App'>
        <p>Hello world!</p>
      </div>
    )
  }

}

export default App;
