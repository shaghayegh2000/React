import { Link } from 'react-router-dom';
import './App.css'

const App = () => {
    return(
        <div className='App'>
            <h1 className='mt-2'>my books</h1>

            <nav className='mt-4' style={{borderBottom : "solid 1px" , paddingBottom : "1.5rem"}}>
                <Link className='mx-3' to="/books">Books</Link>
                <Link className='mx-3' to="/about">About Us</Link>
            </nav>
        </div>
    )
}


export default App;
