import React, { useContext, useEffect, useState } from "react";
import { BooksContext } from "./BookInfo";


const BooksLastAdd = () => {
    const { bookList } = useContext(BooksContext);

    const lastAddedBooks = bookList
        .filter((book) => book.imageLink !== "")
        .slice(-5)
        .reverse();

    return (
        <div className="last-add-container">
            <h2 className="last-add-heading" id={"last"}>Ostatnio dodane książki</h2>
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



