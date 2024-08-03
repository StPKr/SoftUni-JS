import { useEffect, useState } from "react";
import { get } from "../../api/requester";
import { Link } from "react-router-dom";
import './TopFiveList.css';
import { booksAPI } from "../../api/books-api";

export default function TopFiveList() {
    const [book, setBook] = useState({});
    const [latestComments, setLatestComments] = useState([]);
    const [pastThreeBooks, setPastThreeBooks] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await booksAPI.getAll('');

            const books = Object.values(response);

            const bookOfTheWeek = books[4];

            setBook(bookOfTheWeek);
            setLatestComments(Object.values(bookOfTheWeek.comments).slice(0, 3));
            setPastThreeBooks(books.slice(0, 5))
        })();
    }, []);

    return (
        <>
            <h1 id="top-five">Top Rated Books</h1>
            <div id="top-rated-books">
                <div className="past-discussions">
                    {pastThreeBooks.map(pastBook => (
                        <div key={pastBook._id} className='past-book'>
                            <div className='past-book-banner'>
                                <Link to={`/books/${pastBook._id}`}>
                                    <img src={pastBook.cover} alt="banner" />
                                </Link>
                            </div>
                            <div className="past-book-details">
                                <h2 className='past-week-book-title'>{pastBook.title}
                                </h2>
                                <p className='summary'>{pastBook.summary}</p>
                            </div>
                            <div>
                                <button className='see-discussion'>See Discussion</button>
                                <a href="#" className="thumbs-up" >
                                    <span>&#128077;</span>
                                </a>
                                <span><b>
                                    {book.likes}
                                </b></span>
                                <a href="#" className="thumbs-down" >
                                    <span>&#128078;</span>
                                </a>
                                <span><b>
                                    {book.dislikes}
                                </b></span>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </>
    );
}