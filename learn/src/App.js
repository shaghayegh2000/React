import './App.css';
import Counter from './component/Counter';
// import { Component } from 'react';
import { useState } from 'react';

// const App = () => {
//   return (
//     <>
//       <div className='App'>
//         <h2>My counter</h2>
//         <Counter count={5}/>
//         <Counter>
//           this is a counter!
//         </Counter>
//       </div>
//     </>
//   );
// }

// class component
// class App extends Component {
//   render() {
//       return (
//     <>
//       <div className='App'>
//         <h2>My counter</h2>
//         <Counter/>
//       </div>
//     </>
//   );
//   }
// }


// learn state in class and function
// class App extends Component {

  // state = {
  //   count: 0,
  //   name: "Shaghayegh",
  //   Lname: "Mohamadi"
  // }

//   render(){
//     const{count , name , Lname} = this.state;
//     return(
//       <div className='App'>
//         <header>
//           <h2>My Counter</h2>
//         </header>
//         <p>{count}</p>
//         <p>{name} {Lname}</p>
//       </div>
//     )
//   }
// }

const App = () => { 
  // statefuland stateles 
  const[count , setCount] = useState(0);
  const[name , setName] = useState("Shaghayegh");

  const changeCount = () => {
    setCount(5);
  }
  const increaseCount = () => {
    setCount(count+1)
  }
  const decreaseCount = () => {
    setCount(count-1)
  }
  const resetCount = () => {
    setCount(0)
  }

  return (
    <div className='App'>
      <header>
        <h2>My Counter</h2>
      </header>
      <Counter inc={increaseCount} dec={decreaseCount} res={resetCount} count={count}/>
      <p>{count}</p>
      {/* <p>{name}</p> */}
      <button className='btn' onClick={changeCount}>change count</button>
    </div>
  )
}


export default App;
