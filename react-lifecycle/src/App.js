import { Component } from "react";
import "./App.css";

class App extends Component {
    constructor() {
        super();
        console.log("App.js - constructor()");
        this.state = { date: new Date(), showClock: true, color: false };
    }

    static getDerivedStateFromProps(props, state) {
        console.log("App.js - getDerivedStateFromProps()");
        return state;
    }

    componentDidMount(){
        console.log("App.js - componentDidMount()");
    }

    render() {
        console.log("App.js - render()");

        return (
            <div className="App mt-2">
                <p>Hello World!</p>
            </div>
        )
    }
}

export default App;