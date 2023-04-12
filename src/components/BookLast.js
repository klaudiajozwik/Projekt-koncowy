import React, { useContext } from "react";
import { BooksContext } from "./BookInfo";

const LastBook = () => {
    const { bookList } = useContext(BooksContext);
    const lastBook = bookList[bookList.length - 1];

    if (!lastBook) {
        return null;
    }

    return (
        <div className="last__book-container">
            <img src={lastBook.imageLink} alt={lastBook.title} />
            <div className="last-book__description">
                <h3>{lastBook.title}</h3>
                <p>{lastBook.description}</p>
            </div>
        </div>
    );
};

export default LastBook;
