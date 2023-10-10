import { Component } from "react";
import "./App.css";
import Clock from "./component/Clock";

class App extends Component {
    constructor() {
        super();
        console.log("App.js - constructor()");
        this.state = { date: new Date(), showClock: true, color: false };
        this.colorChange = this.colorChange.bind(this);
        this.clockChange = this.clockChange.bind(this);
    }

    static getDerivedStateFromProps(props, state) {
        console.log("App.js - getDerivedStateFromProps()");
        return state;
    }

    componentDidMount() {
        console.log("App.js - componentDidMount()");
        this.timer = setInterval(() => {
            this.tick();
        }, 1000);
    }

    componentWillUnmount() {
        console.log("App.js - componentWillUnmount()");
        clearInterval(this.timer);
    }

    tick() {
        this.setState({ date: new Date() });
    }

    clockChange() {
        this.setState({ showClock: !this.state.showClock });
    }

    colorChange() {
        this.setState({ color: !this.state.color });
    }

    render() {
        console.log("App.js - render()");

        const { date, showClock, color } = this.state;

        return (
            <div className="App mt-2">
                <p>Hello World!</p>

                {
                    showClock ? (
                        <Clock date={date} />
                    ) : null
                }
                <button type="" onClick={this.clockChange}>Show Clock</button>
                <button type="" onClick={this.colorChange}>change color</button>
            </div>
        )
    }
}

export default App;