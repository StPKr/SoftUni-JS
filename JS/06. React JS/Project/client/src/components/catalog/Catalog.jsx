import { useEffect, useState } from "react"
import './Catalog.css'

export default function Catalog() {
    const [books, setBooks] = useState([]);
    const [foundBooks, setFoundBooks] = useState([]);

    useEffect(() => {
        const abortController = new AbortController(); // if you click away too fast it cancels the HTTP request

        (async () => {
            const response = await fetch('http://localhost:3030/jsonstore/books', {
                signal: abortController.signal
            });
            const result = await response.json();

            const topFiveBooksArray = Object.values(result);

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
            <h1>Catalog</h1>
            <input type="text" id="search-bar" placeholder="Search for a book..." />
            <div id="book-list">
                {books.map((book) => (
                    <div key={book.ISBN} className="book">
                        <h2 className="title">{book.title}</h2>
                        <img className="cover" src={book.cover} alt="Book Cover" />
                        <p className="author">{book.author}</p>
                        <p className="genre">{book.genre}</p>
                        <p className="year">{book.year}</p>
                        <p className="summary">{book.summary}</p>
                        <button>Add</button>
                        <button>See more</button>
                    </div>
                ))}
            </div>
        </section>
    );
}