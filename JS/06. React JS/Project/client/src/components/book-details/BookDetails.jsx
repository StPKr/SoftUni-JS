import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import './BookDetails.css'
import { booksAPI } from "../../api/books-api";
import { useAuthContext } from "../../context/AuthContext";

export default function BookDetails() {
    const [book, setBook] = useState({});
    const { bookId } = useParams();
    const { userId } = useAuthContext();
    const navigate = useNavigate();


    useEffect(() => {
        const abortController = new AbortController();

        (async () => {
            const response = await booksAPI.getOne(bookId, {
                signal: abortController.signal
            });
            setBook(response);
        })();

        return () => {
            abortController.abort();
        }
    }, []);

    const bookDeleteHandler = async () => {
        const isConfirmed = confirm(`Are you sure you want  to delete ${book.title}? Any accumulated comments or likes will be permanently lost!`);

        if (!isConfirmed) {
            return;
        }

        try {
            await booksAPI.remove(bookId);

            navigate('/');
        } catch (err) {
            console.log(err.message);
        }
    }

    const isOwner = userId === book._ownerId;
    return (
        <div className="book-details">
            <h2 className="title">{book.title}</h2>
            <img className="cover" src={book.cover} alt="Book Cover" />
            <p className="author">{book.author}</p>
            <p className="genre">{book.genre}</p>
            <p className="year">{book.year}</p>
            <p className="ISBN">{book.ISBN}</p>
            <p className="summary">{book.summary}</p>
            {isOwner &&
                <div className="book-buttons">
                    <button onClick={() => { navigate(`/books/${bookId}/edit`) }}>Edit</button>
                    <button onClick={bookDeleteHandler}>Delete</button>
                </div>
            }
        </div>
    );
}