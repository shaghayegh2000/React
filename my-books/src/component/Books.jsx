import { Link , Outlet} from 'react-router-dom';
import {getBooks} from '../data/data';

const Books = () => {
    const allBooks = getBooks();

    return (
        <div className="d-flex text-start ">
            <nav className='py-3 border-info' style={{borderRight:"1px solid"}}>
                <input className='mx-3' type="text" placeholder='Search book'/>
                {
                    allBooks.map((book) => (
                        <Link className='mx-5 my-1 d-block text-black' to={`/books/${book.number}`} key={book.number}>{book.name}</Link>
                    ))
                }
            </nav>
            <Outlet/>
        </div>
    )
}

export default Books;