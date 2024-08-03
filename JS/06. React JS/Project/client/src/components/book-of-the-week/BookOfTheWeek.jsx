import './BookOfTheWeek.css'
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { getCurrentWeek } from '../../util/dateHandler';
import { booksAPI } from '../../api/books-api';

export default function CurrentDiscussion() {
    const [book, setBook] = useState({});
    const [comments, setComments] = useState([]);
    const [areaValue, setAreaValue] = useState('');
    const textAreaRef = useRef(null);

    useEffect(() => {
        (async () => {
            const response = await booksAPI.getBookOfTheWeek('');


            setBook(response);
            setComments(Object.values(response.comments));
        })();
    }, []);

    const handleChange = (event) => {
        setAreaValue(event.target.value);
    };

    useEffect(() => {
        const textArea = textAreaRef.current;
        textArea.style.height = 'auto';
        textArea.style.height = textArea.scrollHeight + 'px';
    }, [areaValue]);

    return (
        <>
            <div className='current-book-of-the-week'>
                <div className='current-book-banner'>
                    <Link to={`/books/${book._id}`}>
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

            <h2 id='current-comments-title'><b>Comments</b></h2>
            <div className='current-comments'>
                {comments.map(comment => (
                    <div key={comment._id} className="comment">
                        <p className="comment-text">{comment.text}</p>
                        <strong className="comment-author">{comment.author}:</strong>
                    </div>
                ))}

            </div>

            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form" >
                    {/* <input
                        type="text"
                        placeholder="Pesho"
                        name="username"
                    // onChange={(e) => setUsername(e.target.value)}
                    // value={username}
                    /> */}
                    <textarea
                        ref={textAreaRef}
                        value={areaValue}
                        onChange={handleChange}
                        rows={1}
                        className='comment-area'
                        name="comment"
                        placeholder="Comment......"
                    // onChange={(e) => setComment(e.target.value)}
                    // value={comment}
                    ></textarea>

                    <input className="add-comment" type="submit" value="Add Comment" />
                </form>
            </article>
        </>
    );
}