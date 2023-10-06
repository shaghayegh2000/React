import { useParams } from "react-router-dom";
import { getBook } from "../data/data";

const Book = () => {
    const bookId = useParams();
    const book = getBook(parseInt(bookId.BookId));

    if (book) {
        return (
            <div>
                <main className="mt-3">
                    <h3>Total price : {`${book.amount} Tooman`}</h3>
                    <p>Book name : {book.name}</p>
                    <p>Date of Release : {book.due}</p>
                    <p>
                        <button className="btn btn-outline-primary">Delet Book</button>
                    </p>
                </main>
            </div>
        )
    }else {
        return (
            <main className="mt-3">
            <h3>The book does not exist!</h3>

        </main>
        )
    }

}


export default Book;






