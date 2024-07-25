import { Link } from 'react-router-dom';
import { getCurrentWeek } from '../../util/dateHandler';
import './Home.css'
import { useEffect, useState } from 'react';
import { get } from '../../api/requester';


export default function Home() {
    const [book, setBook] = useState({});
    const [latestComments, setLatestComments] = useState([]);
    const [pastThreeBooks, setPastThreeBooks] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await get('');

            const books = Object.values(response);

            const bookOfTheWeek = books[4];

            setBook(bookOfTheWeek);
            setLatestComments(Object.values(bookOfTheWeek.comments).slice(0, 3));
            setPastThreeBooks(books.slice(0, 3))
        })();
    }, []);

    return (
        <section id="home" className="home">
            <div className='current-book-of-the-week'>
                <div className='current-book-banner'>
                    <Link to={`/catalog/${book._id}`}>
                        <img src={book.cover} alt="banner" />
                    </Link>
                </div>
                <div className="current-book-details">
                    <h1 className='title-of-the-week'>Book of the Week - {book.title}
                    </h1>
                    <h2 className='author-of-the-week'>By: {book.author}</h2>
                    <h3>Week: {getCurrentWeek()}</h3>
                    <p className='summary'>{book.summary}</p>
                    <div>

                    </div>
                    <div className='latest-comments'>
                        <h2 id='latest-comments'>Latest comments:</h2>
                        {latestComments.map(comment => (
                            <div key={comment._id} className="comment">
                                <strong className="comment-author">{comment.author}:</strong>
                                <p className="comment-text">{comment.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div>
                <button className='join-discussion'>Join Discussion</button>
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

            <section className='past-discussion-section'>
                <h1 className='past-section-title'>Previous Weeks&apos; Discussions</h1>
                <div className="past-discussions">
                    {pastThreeBooks.map(pastBook => (
                        <div key={pastBook._id} className='past-book'>
                            <div className='past-book-banner'>
                                <Link to={`/catalog/${pastBook._id}`}>
                                    <img src={pastBook.cover} alt="banner" />
                                </Link>
                            </div>
                            <div className="past-book-details">
                                <h2 className='past-week-book-title'>{pastBook.title}
                                </h2>
                                <p className='summary'>{pastBook.summary}</p>
                            </div>
                            <button className='see-discussion'>See Discussion</button>
                        </div>
                    ))}

                </div>
            </section>
        </section>
    );
}