import { useEffect, useState } from "react"
import { useNavigate, Link } from 'react-router-dom';
import './Catalog.css'

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
            const response = await fetch('http://localhost:3030/jsonstore/library/books', {
                signal: abortController.signal
            });
            const result = await response.json();

            const topFiveBooksArray = Object.values(result);

            setBooks(topFiveBooksArray.slice(0, 5));
        })();

        return () => {
            abortController.abort();
        }
    }, []);

    useEffect(() => {

    }, []);

    return (

        <section id="catalog">
            <h1>Find a book</h1>
            <input
                type="text"
                id="search-bar"
                className={isFocused ? 'input-highlight' : 'input-non-highlight'}
                onFocus={handleFocus}
                onBlur={handleBlur} placeholder="Title..." />
            <div id="add-to-calatog">
                Can't find what you're looking for? <Link to="/create">Add to our collection!</Link>
            </div>
            <div id="book-list">
                {books.map((book) => (
                    <div key={book.ISBN} className="book">
                        <h2 className="title">{book.title}</h2>
                        <img className="cover" src={book.cover} alt="Book Cover" />
                        {/* <p className="author">{book.author}</p>
                        <p className="genre">{book.genre}</p>
                        <p className="year">{book.year}</p>
                        <p className="summary">{book.summary}</p> */}
                        <button >Add</button>
                        <button onClick={() => navigate(`/catalog/${book.ISBN}`)}>Details</button>
                    </div>
                ))}
            </div>
        </section>
    );
}