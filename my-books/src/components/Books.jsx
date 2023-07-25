import { NavLink, Outlet, useSearchParams, useLocation } from "react-router-dom";
import { getBooks } from "../data/data";
import styles from "../modules/Books.module.css";

const Books = () => {
  const [SearchPara, SetSearchPara] = useSearchParams();
  const loc = useLocation();
  const allBooks = getBooks();
  return (
    <div className='d-flex'>
      <nav className={styles.nav}>
        <input value={SearchPara.get("filter") || ""} onChange={event => {
          let filter = event.target.value;
          if (filter) {
            SetSearchPara({ filter });
          } else {
            SetSearchPara({});
          }
        }} type="text" placeholder="Search Book" />
        {
          allBooks.filter((book) => {
            let filter = SearchPara.get("filter");
            if (!filter) return true;
            let name = book.name.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })
            .map((book) => (
              <NavLink style={({ isActive }) => {
                return {
                  color: isActive ? "red" : ""
                }
              }} className="d-block mt-2 " to={`/books/${book.number}${loc.search}`} key={book.number}>{book.name}</NavLink>
            ))
        }
      </nav>
      <Outlet />
    </div>

  )
}


export default Books;