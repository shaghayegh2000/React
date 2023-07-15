// import { Component } from "react";

const Counter = ({inc , dec , res , count}) => {
    return(
        // <>
        //     <p>counter : {Math.floor(Math.random()*1000)}</p>
        //     <p>{props.count || 20} : is a prop!</p>
        //     <p>{props.children} and {props.count} : is a prop!</p>
        // </>
        
            <>
                <h1>{count}</h1>
                <button className="btnS" onClick={inc}>+</button>
                <button className="btnS" onClick={dec}>-</button>
                <button className="btnS" onClick={res}>C</button>
            </>
    )
}

Counter.defaultProps = {count: 25}


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

// class Counter extends Component {

//     constructor() {
//         super();
        
//         this.state = {
//             name : "Shaghayegh"
//         }   
//         this.changeName = this.changeName.bind(this); 
//     }

//     changeName() {
//         this.setState({name: "Razieh"})
//     }

//     render() {
//         return (
//             <div>
//                 <p>{this.state.name}</p>
//                 <button onClick={this.changeName}>change name</button>
//             </div>
//         )
//     }
// }

export default Counter;

