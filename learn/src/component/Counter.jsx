// import { Component } from "react";

const Counter = () => {
    return(
        <>
            <p>counter : {Math.floor(Math.random()*1000)}</p>
        </>
    )
}

// class component
// class Counter extends Component {
//     render() {
//         return (
//             <>
//                 <p>counter : {Math.floor(Math.random()*1000)}</p>
//             </>
//         )
//     }
// }

export default Counter;