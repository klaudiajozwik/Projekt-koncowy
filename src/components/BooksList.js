
import React, { useContext, useEffect, useState } from "react";
import { BooksContext } from "./BookInfo";
import { collection, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { firestore } from "../firebase";

const BooksList = () => {
    const { bookList, setBookList } = useContext(BooksContext);

    const getBooksFromFirestore = async () => {
        const booksCollectionRef = collection(firestore, "books");
        const booksSnapshot = await getDocs(booksCollectionRef);
        const books = booksSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        return books;
    };

    useEffect(() => {
        const loadBooks = async () => {
            const books = await getBooksFromFirestore();
            setBookList(books);
        };
        loadBooks();
    }, [setBookList]);

    const handleDelete = async (bookId) => {
        await deleteDoc(doc(firestore, "books", bookId));
        setBookList(bookList.filter((book) => book.id !== bookId));
    };

    const handleRead = async (bookId) => {
        const book = bookList.find((book) => book.id === bookId);
        await updateDoc(doc(firestore, "books", bookId), { read: !book.read });
        setBookList(
            bookList.map((book) =>
                book.id === bookId ? { ...book, read: !book.read } : book
            )
        );
    };

    return (
        <ul className="book__list">
            {bookList.map((book) => (
                <li
                    key={book.id}
                    className={`book__item ${
                        book.read ? "book__item--read" : ""
                    }`}
                >
                    <div
                        className={`book__title ${
                            book.read ? "book__title--read" : ""
                        }`}
                    >
                        {book.title}
                    </div>
                    <div className="book__isbn">{book.isbn}</div>
                    <div className={"book__btn"}>
                        <button
                            onClick={() => handleDelete(book.id)}
                            className="book__delete-btn"
                        >
                            Usuń
                        </button>
                        <button
                            onClick={() => handleRead(book.id)}
                            className={`book__read-btn ${
                                book.read ? "book__read-btn--read" : ""
                            }`}
                        >
                            Przeczytane
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default BooksList;
