import './App.css';
import Counter from './component/Counter';
// import { Component } from 'react';

const App = () => {
  return (
    <>
      <div className='App'>
        <h2>My counter</h2>
        <Counter/>
      </div>
    </>
  );
}

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


export default App;
