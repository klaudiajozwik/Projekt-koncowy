import React, { useContext } from "react";
import { BooksContext } from "./BookInfo";

const BooksLastAdd = () => {
    const { bookList } = useContext(BooksContext);

    const lastAddedBooks = bookList
        .filter((book) => book.imageLink !== "")
        .sort((a, b) => (a.timestamp > b.timestamp ? -1 : 1))
        .slice(0, 5);

    return (
        <div className="last-add-container">
            <h2 className="last-add-heading" id={"last"}>
                Ostatnio dodane książki
            </h2>
            <div className="last-add-books">
                {lastAddedBooks.map((book) => (
                    <div key={book.id} className="last-add-book">
                        <img src={book.imageLink} alt={book.title} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BooksLastAdd;
