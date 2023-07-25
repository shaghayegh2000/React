import { useParams } from "react-router-dom";
import { getBook } from "../data/data";

const Book = () => {
    const params = useParams();
    const book = getBook(parseInt(params.bookId));

    if (book) {
        return (
            <div className="mt-4 w-50 py-5 rounded-pill d-block mx-5 bg-info">
                <h3>{book.amount} tooman</h3>
                <h6 className="my-3">{book.name}</h6>
                <h6 className="my-3">Date of publish : {book.due}</h6>
                <p className="mt-4">
                    <button className="btn btn-outline-dark border-2">Delete Book</button>
                </p>
            </div>
        )
    } else {
        return (
            <main style={{ height: 600 }} className='d-flex justify-content-center align-items-center'>
                <h4 className='bg-secondary py-5 w-50 text-center rounded-pill text-white'>Page Not Found!</h4>
            </main>
        )
    }

}

export default Book;