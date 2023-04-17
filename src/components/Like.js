import React, { useContext } from "react";
import { BooksContext } from "./BookInfo";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Like = () => {
    const { bookList } = useContext(BooksContext);
    const likedBooks = bookList.filter((book) => book.heart);

    return (

        <div className="like__container">
            <h2 className={"like__heading"}> Polubione </h2>
            <div className={"like"}>
                {likedBooks.length > 0 ? (
                    <div className="like__list-container">
                        <div className="like__list">
                            {likedBooks.map((book) => (
                                <div key={book.id} className="like__item">
                                    <img src={book.imageLink} alt={book.title} />
                                    <div className="like__title">{book.title}</div>
                                    <FontAwesomeIcon icon={faHeart} color="red" />
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="like__empty">Brak polubionych książek</div>
                )}
            </div>
        </div>
    );
};

export default Like;
