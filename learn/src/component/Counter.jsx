// import { Component } from "react";

const Counter = ({inc , dec , reset , count}) => {
    return(
        // <>
        //     <p>counter : {Math.floor(Math.random()*1000)}</p>
        //     <p>{props.count || 20} : is a prop!</p>
        //     <p>{props.children} and {props.count} : is a prop!</p>
        // </>

        <>
            <h1 className="mb-4 mt-3" style={{color : count === 0 ? 'red' : 'green'}}>{count}</h1>
            <button className="mx-1" onClick={inc}>+</button>
            <button className="mx-1 px-2" style={{opacity : count ===0 ? .5 : 1}} onClick={dec}>-</button>
            <button className="mx-1" onClick={reset}>C</button>
        </>
        )
        
}



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







