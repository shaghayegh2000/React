import { Component } from "react";
class Clock extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        console.log("Clock.jsx - constructor()");
    }

    static getDerivedStateFromProps(props, state) {
        console.log("Clock.jsx - getDerivedStateFromProps()");
        return state;
    }

    componentDidMount() {
        console.log("Clock.jsx - componentDidMount()");
    }

    componentWillUnmount(){
        console.log("Clock.jsx - componentWillUnmount()");
    }

    render() {
        console.log("Clock.jsx - render()");
        const { date } = this.props;
        return (
            <div className='App'>
                <p>Time In Right Now : {date.toLocaleTimeString()}</p>
            </div>
        )
    }
}
export default Clock;