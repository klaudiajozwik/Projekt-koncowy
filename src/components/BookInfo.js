
import React, { useState, useEffect, createContext } from "react";
import BooksList from './BooksList'

import {firestore} from "../firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

export const BooksContext = createContext();

const BookInfo = () => {
    const [isbnList, setIsbnList] = useState([]);
    const [bookList, setBookList] = useState([]);
    const [isValidISBN, setIsValidISBN] = useState(true);

    useEffect(() => {
        const getBooksFromFirestore = async () => {
            const booksCollectionRef = collection(firestore, "books");
            const booksSnapshot = await getDocs(booksCollectionRef);
            const books = booksSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            setBookList(books);
        };
        getBooksFromFirestore();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch(
            `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbnList[isbnList.length - 1]}`
        );
        const data = await response.json();
        if (data.totalItems === 0) {
            setIsValidISBN(false);
        } else {
            setIsValidISBN(true);
            const book = data.items[0];
            const title = book.volumeInfo.title;
            const isbn = isbnList[isbnList.length - 1];
            const docRef = await addDoc(collection(firestore, "books"), {
                title,
                isbn
            });
            console.log("Document written with ID: ", docRef.id);
            setBookList([...bookList, { id: docRef.id, title, isbn }]);
        }
        setIsbnList([]);
    };

    return (
        <BooksContext.Provider value={{ bookList, setBookList }}>
            <div className={"section__implement"}>
                <h2 className={"form__heading"}> Wprowadź numer ISBN</h2>
                <form className={"form"} onSubmit={handleSubmit}>
                    <label style={{color:"white"} }>
                        ISBN:
                        <input
                            value={isbnList[isbnList.length - 1] || ""}
                            onChange={(event) => {
                                const newIsbnList = [...isbnList];
                                newIsbnList[isbnList.length - 1] = event.target.value;
                                setIsbnList(newIsbnList);
                            }}
                        />
                    </label>
                    <button  className={"form__btn"} type="submit">Szukaj</button>
                </form>
                {!isValidISBN && <h3>Numer ISBN jest niepoprawny.</h3>}
                <h2 className={"list__heading"}> Moja lista </h2>
                <BooksList />
            </div>
        </BooksContext.Provider>
    );
};

export default BookInfo
