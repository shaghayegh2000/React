import { NavLink, Outlet, useSearchParams } from 'react-router-dom';
import { getBooks } from '../data/data';

const Books = () => {
    const allBooks = getBooks();
    const [SearchParams, SetSearchParams] = useSearchParams();

    return (
        <div className="d-flex text-start ">
            <nav className='py-3 border-info' style={{ borderRight: "1px solid" }}>
                <input value={SearchParams.get("filter") || ""}
                    onChange={event => {
                        let filter = event.target.value;
                        if(filter) {
                            SetSearchParams({filter});
                        }else {
                            SetSearchParams({});
                        }
                    }} className='mx-3' type="text" placeholder='Search book' />
                {
                    Books.filter((book)=>{
                        let filter = SearchParams.get("filter");
                        if(!filter) return true;
                        let name
                    })
                    allBooks.map((book) => (
                        <NavLink style={({ isActive }) => {
                            return {
                                display: "block",
                                margin: "2rem 0",
                                color: isActive ? "red" : "",
                            };
                        }} className='mx-5 my-1 d-block text-black' to={`/books/${book.number}`} key={book.number}>{book.name}</NavLink>
                    ))
                }
            </nav>
            <Outlet />
        </div>
    )
}

export default Books;