import { Link , Outlet} from "react-router-dom";
import { getBooks } from "../data/data";
import styles from "../modules/Books.module.css";

const Books = () => {
    const allBooks = getBooks();
    return (
      <div className='d-flex'>
        <nav className={styles.nav}>
            <input type="text" placeholder="Search Book"/>
            {
                allBooks.map((book)=>(
                    <Link className="d-block mt-2 " to={`/books/${book.number}`} key={book.number}>{book.name}</Link>
                ))
            }
        </nav>
        <Outlet/>
      </div>
      
    )
  }
  
  
  export default Books;