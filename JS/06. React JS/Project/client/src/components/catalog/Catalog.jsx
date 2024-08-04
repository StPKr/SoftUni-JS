import { useEffect, useState } from "react"
import { useNavigate, Link } from 'react-router-dom';
import './Catalog.css'
import { booksAPI } from "../../api/books-api";

export default function Catalog() {
    const [books, setBooks] = useState([]);
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const navigate = useNavigate();

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);

    useEffect(() => {
        const abortController = new AbortController();

        (async () => {
            try {
                const response = await booksAPI.getAll('', {
                    signal: abortController.signal
                });
                setBooks(response);
                // setFilteredBooks(response); // To show all books on mount
            } catch (error) {
                if (error.name !== 'AbortError') {
                    console.error('Error fetching books:', error);
                }
            }
        })();

        return () => {
            abortController.abort();
        };
    }, []);

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            // e.preventDefault();
            filterBooks(searchTerm);
        }
    };

    const filterBooks = (term) => {
        const filtered = books.filter((book) =>
            book.title.toLowerCase().includes(term.toLowerCase())
        );
        setFilteredBooks(filtered);
    };

    return (

        <section id="catalog">
            <h1 className="search-main-title">Find a book</h1>
            <input
                type="search"
                id="search-bar"
                className={isFocused ? 'input-highlight' : 'input-non-highlight'}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Title..."
            />
            {filteredBooks.length > 0
                ? (<div id="book-list">
                    {filteredBooks.map((book) => (
                        <div key={book._id} className="book">

                            <h2 className="title">{book.title}</h2>
                            <Link to={`/books/${book._id}`}>
                                <img className="cover" src={book.cover} alt="Book Cover" />
                            </Link>
                            {/* <p className="author">{book.author}</p>
                            <p className="genre">{book.genre}</p>
                            <p className="year">{book.year}</p>
                            <p className="summary">{book.summary}</p> */}
                            <div className="book-buttons">
                                <button >Add</button>
                                <button >Nominate</button>
                                <button onClick={() => navigate(`/books/${book._id}`)}>Details</button>
                            </div>
                        </div>
                    ))}
                </div>)
                : (<div id="add-to-calatog">
                    Can&apos;t find what you&apos;re looking for? <Link className='hyperlink' to="/create">Add to our collection!</Link>
                </div>)
            }


        </section>
    );
}