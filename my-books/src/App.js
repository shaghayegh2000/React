import {NavLink , Outlet} from 'react-router-dom'

const App = () => {
  return (
    <div className='text-center'>
      <h2 >My Books</h2>
      <nav className='mt-1 py-3 border-bottom border-dark'>
        <NavLink style={({isActive})=>{
          return {
            color: isActive ? "red" : ""
          }
        }} className='mx-5' to="/books">Books</NavLink>
        <NavLink className='mx-5' to="/about">About Us</NavLink>
      </nav>
      <Outlet/>
    </div>
  )
}


export default App;
