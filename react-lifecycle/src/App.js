import './App.css';
import { Component } from 'react';
import Clock from './component/Clock';

class App extends Component {
  constructor() {
    super();
    console.log("App.js - constructor()");
    this.state = { date: new Date(), showClock: true, color: false };
    this.colorChange = this.clockChange.bind(this);
    this.clockChange = this.clockChange.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    console.log("App.js - getDerivedStateFromProps()");
    return state;
  }

  componentDidMount() {
    console.log("App.js - componentDidMount()");
    this.timer = setInterval(() =>
      this.tick(), 1000);
  }

  componentWillUnmount() {
    console.log("App.js - componentWillUnmount()");
    clearInterval(this.timer);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  clockChange() {
    this.setState({showClock: !this.state.showClock});
  }

  colorChange() {
    this.setState({color: !this.state.color})
  }

  render() {
    console.log("App.js - render()");

    const { date, showClock, color } = this.state;

    return (
      
      <div className='App'>
        <p>Hello world!</p>
        {
          showClock ? null  : <Clock date={date}/>
        }
        <button className='mx-3 py-1 rounded-3' onClick={this.clockChange}>Show Time</button>
        <button className='mx-3 py-1 rounded-3' onClick={this.colorChange}>Change Color</button>
      </div>
    )
  }

}

export default App;
