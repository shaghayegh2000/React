import './App.css';
import { Link , Outlet} from "react-router-dom"

const App = () => {
  return (
    <div className='text-center'>
      <h2 >My Books</h2>
      <nav className='border-bottom border-info py-3 '>
        <Link className='mx-3 text-black' to="/books">Books</Link>
        <Link className='mx-3 text-black' to="/about">About Us</Link>
      </nav>
      <Outlet/>
    </div>
  )
}


export default App;
