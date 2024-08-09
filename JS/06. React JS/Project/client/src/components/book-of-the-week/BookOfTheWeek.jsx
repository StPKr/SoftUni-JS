import './BookOfTheWeek.css'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCurrentWeek, unixToTime } from '../../util/dateAndTimeHandler';
import { booksAPI } from '../../api/books-api';
import { useForm } from '../../hooks/useForm';
import { useCreateComment, useGetAllComments } from '../../hooks/useComments';
import { useAuthContext } from '../../context/AuthContext';
import { commentValidator } from '../../util/validators';
import { commentsAPI } from '../../api/comments-api';
import Spinner from '../spinner/Spinner';

const initialValues = { comment: '' }

export default function CurrentDiscussion() {
    const [book, setBook] = useState({});
    const [comments, setComments] = useGetAllComments(book._id);
    const createComment = useCreateComment();
    const { isAuthenticated } = useAuthContext();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                const response = await booksAPI.getBookOfTheWeek('');
                setBook(response);
            } catch (err) {
                alert(err.message);
            } finally {
                setIsLoading(false);
            }
        })();
    }, []);

    const {
        changeHandler,
        submitHandler,
        values
    } = useForm(initialValues, async ({ comment }) => {
        if (comment.length === 0) {
            return
        }
        try {
            await createComment(book._id, comment);
            const allComments = await commentsAPI.getAllComments(book._id);

            setComments(allComments);
        } catch (err) {
            alert(err.message);
        } finally {
            setIsLoading(false);
        }
    }, commentValidator);

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
                            <h3>Week: {getCurrentWeek()}</h3>
                            <p className='summary'>{book.summary}</p>
                            <div id='discussion-points'>
                                <h2>
                                    Food for Thought:
                                </h2>
                                <h3>Characters / Point of View / Plot / Setting / Symbolism </h3>
                                <ul>
                                    <li>
                                        Who was the mockingbird?
                                    </li>
                                    <li>
                                        How was the mockingbird killed?
                                    </li>
                                    <li>
                                        How is Atticus's sense of justice inferred when he tells the children they can shoot all the bluejays they want, but “it is a sin to kill a mockingbird”?
                                    </li>
                                    <li>
                                        Was Atticus successful in instilling conscience in his children?
                                    </li>
                                </ul>

                            </div>
                        </div>
                        <div className='test-box'>
                            <div>
                                <h3>When do we meet?</h3>
                                <p><i className="fas fa-calendar-alt"></i> Every Saturday at 18:00</p>
                                <h4>At:</h4>
                                <p><i className="fas fa-map-marker-alt"></i>the Cozy Book Cafe</p>
                                <p> on 123 Book St, Reading City</p>
                                <h4>Can&apos;t attend in person?</h4>
                                <p>
                                    <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-discord"></i> Join our Discord instead
                                    </a>
                                </p>
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

                    {isAuthenticated &&
                        <article className="create-comment">
                            <label>Add new comment:</label>
                            <form className="form" onSubmit={submitHandler} >
                                <textarea
                                    className='comment-area'
                                    name="comment"
                                    placeholder="Comment......"
                                    onChange={changeHandler}
                                    value={values.comment}
                                ></textarea>

                                <input className="add-comment" type="submit" value="Add Comment" />
                            </form>
                        </article>
                    }
                </>
            }
        </>

    );
}