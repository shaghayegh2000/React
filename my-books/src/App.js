import {Link , Outlet} from 'react-router-dom'

const App = () => {
  return (
    <div className='text-center'>
      <h2 >My Books</h2>
      <nav className='mt-1 py-3 border-bottom border-dark'>
        <Link className='mx-5' to="/books">Books</Link>
        <Link className='mx-5' to="/about">About Us</Link>
      </nav>
      <Outlet/>
    </div>
  )
}


export default App;
