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

    shouldComponentUpdate(nextProp , nextState) {
        return true;
    }

    componentDidMount() {
        console.log("Clock.jsx - componentDidMount()");
    }

    componentWillUnmount() {
        console.log("Clock.jsx - componentWillUnmount()");
    }

    getSnapshotBeforeUpdate(preProp , prevState){
        console.log("Clock.jsx - getSnapshotBeforeUpdate()");
    }

    render() {
        console.log("Clock.jsx - render()");

        const { date } = this.props;

        return (
            <>
                <p>Time : {date.toLocaleTimeString()}</p>
            </>
        )
    }
}
export default Clock;