import { Component } from "react";


// const Counter = (props) => {
//     return(
//         <>
//             <p>counter : {Math.floor(Math.random()*1000)}</p>
//             <p>{props.count || 20} : is a prop!</p>
//             <p>{props.children} and {props.count} : is a prop!</p>
//         </>
//     )
// }
// Counter.defaultProps = {count: 25}


// class component
// class Counter extends Component {
//     static defaultProps = {
//         count: 100
//     }
//     render() {
//         const {count} = this.props;
//         return (
//             <>
//                 <p>counter : {Math.floor(Math.random()*1000)}</p>
//                 <p>counter : {count}</p>
//                 <h3>{count} is a prop!</h3>
//             </>
//         )
//     }
// }

class Counter extends Component {
    render() {
        return (
            <div>
                <p>Counter</p>
            </div>
        )
    }
}

export default Counter;