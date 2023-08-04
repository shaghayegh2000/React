import './App.css';
import { Component } from 'react';
import Clock from './component/Clock';

class App extends Component {
  constructor() {
    super();
    console.log("App.js - constructor()");
    this.state = { date: new Date(), showClock: true, color: false }
  }

  static getDerivedStateFromProps(props, state) {
    console.log("App.js - getDerivedStateFromProps()");
    return state;
  }

  componentDidMount() {
    console.log("App.js - componentDidMount()");

  }
  render() {
    console.log("App.js - render()");
    return (
      <div className='text-center mt-3'>
        <p className='text-uppercase h5'>Hello Every Body!</p>
      </div>
    )
  }
}

export default App;
