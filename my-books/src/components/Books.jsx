import { Link } from "react-router-dom";
import { getBooks } from "../data/data";


const Books = () => {
    const books = getBooks();
    return (
        <div className="text-center mt-3">
            <nav className="" style={{ borderRight: 'solid 1px' }}></nav>
            <input type="text" placeholder="search book" />
            {
                books.map((book) => (
                    <Link to={`/books/${book.number}`}></Link>
                ))
            }
        </div>
    )

}


export default Books;








