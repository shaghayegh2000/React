import { NavLink, Outlet , useSearchParams , useLocation} from "react-router-dom";
import { getBooks } from "../data/data";


const Books = () => {

    const [searchPara , setSearchPara] = useSearchParams(); 

    const loca = useLocation();

    const books = getBooks();
    return (
        <div className="text-center d-flex mx-3">
            <nav className="px-2 py-2" style={{ borderRight: 'solid 1.1px' }}>
                <input value={searchPara.get("filter") || ""}
                onChange={event => {
                    let filter = event.target.value;
                    if (filter) {
                        setSearchPara({filter})
                    }else {
                        setSearchPara({});
                    }
                }} className="my-4 mx-2" type="text" placeholder="search book" />
                
                {
                    books.filter((book)=>{
                        let filter = searchPara.get("filter");
                        if(!filter) return true;
                        let name = book.name.toLocaleLowerCase();
                        return name.startsWith(filter.toLowerCase());
                    })
                    .map((book) => (
                        <NavLink style={({ isActive }) => {
                            return {
                                color: isActive ? "red" : ""
                            }
                        }} className="d-block my-2 text-decoration-none" to={`/books/${book.number}${loca.search}`} key={book.number}>{book.name}</NavLink>
                    ))
                }
            </nav>
            <Outlet />
        </div>
    )

}

export default Books;











