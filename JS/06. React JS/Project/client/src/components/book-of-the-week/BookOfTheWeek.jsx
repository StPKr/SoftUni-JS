import './BookOfTheWeek.css'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { get } from '../../api/requester';
import { getCurrentWeek } from '../../util/dateHandler';

export default function CurrentDiscussion() {
    const [book, setBook] = useState({});
    const [pastThreeBooks, setPastThreeBooks] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await get('');


            const books = Object.values(response);

            setBook(books[4]);
            setPastThreeBooks(books.slice(0, 3))
        })();
    }, []);

    return (
        <>
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
                </div>
            </div>
            <div>
                <button className='join-discussion'>Join Discussion</button>
                <a href="#" className="thumbs-up" >
                    <span>&#128077;</span>
                </a>
                {book.likes}
                <a href="#" className="thumbs-down" >
                    <span>&#128078;</span>
                </a>
                {book.dislikes}
            </div>

            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form" >
                    <input
                        type="text"
                        placeholder="Pesho"
                        name="username"
                    // onChange={(e) => setUsername(e.target.value)}
                    // value={username}
                    />
                    <textarea
                        name="comment"
                        placeholder="Comment......"
                    // onChange={(e) => setComment(e.target.value)}
                    // value={comment}
                    ></textarea>

                    <input className="btn submit" type="submit" value="Add Comment" />
                </form>
            </article>
        </>
    );
}