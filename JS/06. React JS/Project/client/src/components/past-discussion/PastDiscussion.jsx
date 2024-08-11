import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { unixToTime } from '../../util/dateAndTimeHandler';
import { booksAPI } from '../../api/books-api';
import { commentsAPI } from '../../api/comments-api';
import Spinner from '../spinner/Spinner';


export default function PastDiscussion() {
    const { bookId } = useParams();
    const [book, setBook] = useState({});
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const abortController = new AbortController();

        (async () => {
            try {
                const response = await booksAPI.getOne(bookId, {
                    signal: abortController.signal
                });
                setBook(response);

            } catch (err) {
                alert(err.message);
            } finally {
                setIsLoading(false);
            }

        })();

        return () => {
            abortController.abort();
        }
    }, []);


    useEffect(() => {
        const abortController = new AbortController();

        (async () => {
            try {
                const allComments = await commentsAPI.getAllComments(bookId, {
                    signal: abortController.signal
                });

                setComments(allComments);
            } catch (err) {
                alert(err.message);
            } finally {
                setIsLoading(false);
            }

        })();

        return () => {
            abortController.abort();
        }
    }, [bookId]);


    return (
        <>
            {isLoading
                ? <Spinner />
                : <>
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
                            <p className='summary'>{book.summary}</p>
                            <div id='discussion-points'>
                                <h2>
                                    Food for Thought:
                                </h2>
                                <h3>Characters / Point of View / Plot / Setting / Symbolism </h3>
                                <ul>
                                    <li>
                                        What is the significance of the title? Did you find it meaningful, why or why not?
                                    </li>
                                    <li>
                                        What were the main themes of the book? How were those themes brought to life?
                                    </li>
                                    <li>
                                        Were there any quotes (or passages) that stood out to you? Why?
                                    </li>
                                    <li>
                                        Are there any books that you would compare this book to?
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>

                    <div>
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
                                <p className="comment-text">On {unixToTime(comment._createdOn)} <strong className="comment-author">{comment.author.username}</strong> said: <strong>{comment.text}</strong></p>
                            </div>
                        ))}
                    </div>
                </>
            }
        </>

    );
}