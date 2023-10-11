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

    shouldComponentUpdate(nextProp, nextState) {
        console.log("Clock.jsx - shouldComponentUpdate()");
        if (this.props.date !== nextProp.date) {
            return true;
        }
    }

    componentDidMount() {
        console.log("Clock.jsx - componentDidMount()");
    }

    componentWillUnmount() {
        console.log("Clock.jsx - componentWillUnmount()");
    }

    getSnapshotBeforeUpdate(preProp, prevState) {
        console.log("Clock.jsx - getSnapshotBeforeUpdate()");
        return(preProp , prevState);
    }

    componentDidUpdate(prevProv, prevState, snapShot) {
        console.log("Clock.jsx - componentDidUpdate()");
        console.log(snapShot)
    }

    render() {
        console.log("Clock.jsx - render()");

        const { date, color } = this.props;

        const style = {
            color: color ? "tomato" : "black",
        };

        return (
            <>
                <p style={style}>Time : {date.toLocaleTimeString()}</p>
            </>
        )
    }
}
export default Clock;