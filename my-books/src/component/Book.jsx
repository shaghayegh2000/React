import { useParams } from "react-router-dom";
import {getBook} from '../data/data';

const Book = () => {
    const bookId = useParams();
    const book = getBook(parseInt(bookId.bookId));
    return (
        <main className="mt-3 bg-info py-5 w-50 mx-auto rounded-pill text-center">
            <h4>Total Price : {book.amount} Tooman</h4>
            <h6 className="my-4">
                {book.name}
            </h6>
            <h6 className="my-4">Date : {book.due}</h6>
            <button className="btn btn-danger border-dark my-1">Delete the book</button>
        </main>
    )
}

export default Book;