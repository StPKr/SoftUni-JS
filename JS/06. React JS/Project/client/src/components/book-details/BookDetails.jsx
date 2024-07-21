import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import './BookDetails.css'

export default function BookDetails() {
    const [book, setBook] = useState({});
    const { _id } = useParams();

    useEffect(() => {
        const abortController = new AbortController();

        (async () => {
            const response = await fetch(`http://localhost:3030/jsonstore/book-club/books/${_id}`, {
                signal: abortController.signal
            });
            const result = await response.json();

            console.log(result);
            setBook(result);
        })();

        return () => {
            abortController.abort();
        }
    }, [])
    return (
        <div className="book-details">
            <h2 className="title">{book.title}</h2>
            <img className="cover" src={book.cover} alt="Book Cover" />
            <p className="author">{book.author}</p>
            <p className="genre">{book.genre}</p>
            <p className="year">{book.year}</p>
            <p className="summary">{book.summary}</p>
        </div>
    );
}