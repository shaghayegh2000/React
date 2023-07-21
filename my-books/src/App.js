import './App.css';
import { Link } from "react-router-dom"

const App = () => {
  return (
    <div className='text-center'>
      <h2 >My Books</h2>
      <nav className='border-bottom border-danger py-3'>
        <Link className='mx-3' to="/books">Books</Link>
        <Link className='mx-3' to="/about">About Us</Link>
      </nav>
    </div>
  )
}


export default App;
