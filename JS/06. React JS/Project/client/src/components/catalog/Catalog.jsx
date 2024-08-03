import { useEffect, useState } from "react"
import { useNavigate, Link } from 'react-router-dom';
import './Catalog.css'
import { get } from "../../api/requester";
import { booksAPI } from "../../api/books-api";

export default function Catalog() {
    const [books, setBooks] = useState([]);
    const [isFocused, setIsFocused] = useState(false);
    const navigate = useNavigate();

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    useEffect(() => {
        const abortController = new AbortController(); // if you click away too fast it cancels the HTTP request

        (async () => {
            const response = await booksAPI.getAll('', {
                signal: abortController.signal
            });

            const topFiveBooksArray = Object.values(response);

            setBooks(topFiveBooksArray);
        })();

        return () => {
            abortController.abort();
        }
    }, []);

    useEffect(() => {

    }, []);

    return (

        <section id="catalog">
            <h1 className="search-main-title">Find a book</h1>
            <input
                type="search"
                id="search-bar"
                className={isFocused ? 'input-highlight' : 'input-non-highlight'}
                onFocus={handleFocus}
                onBlur={handleBlur} placeholder="Title..." />
            <div id="add-to-calatog">
                Can&apos;t find what you&apos;re looking for? <Link to="/create">Add to our collection!</Link>
            </div>
            <div id="book-list">
                {books.map((book) => (
                    <div key={book._id} className="book">

                        <h2 className="title">{book.title}</h2>
                        <Link to={`/catalog/${book._id}`}>
                            <img className="cover" src={book.cover} alt="Book Cover" />
                        </Link>
                        {/* <p className="author">{book.author}</p>
                        <p className="genre">{book.genre}</p>
                        <p className="year">{book.year}</p>
                        <p className="summary">{book.summary}</p> */}
                        <div className="book-buttons">
                            <button >Add</button>
                            <button >Nominate</button>
                            <button onClick={() => navigate(`/catalog/${book._id}`)}>Details</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}