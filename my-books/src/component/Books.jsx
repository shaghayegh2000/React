import {NavLink , Outlet} from 'react-router-dom';
import {getBooks} from '../data/data';

const Books = () => {
    const allBooks = getBooks();

    return (
        <div className="d-flex text-start ">
            <nav className='py-3 border-info' style={{borderRight:"1px solid"}}>
                <input className='mx-3' type="text" placeholder='Search book'/>
                {
                    allBooks.map((book) => (
                        <NavLink style={({isActive}) => {
                            return {
                                display : "block",
                                margin : "2rem 0",
                                color : isActive ? "red" : "",
                            };
                        }} className='mx-5 my-1 d-block text-black' to={`/books/${book.number}`} key={book.number}>{book.name}</NavLink>
                    ))
                }
            </nav>
            <Outlet/>
        </div>
    )
}

export default Books;