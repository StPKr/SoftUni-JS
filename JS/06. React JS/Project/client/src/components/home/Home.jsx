import { getCurrentWeek } from '../../util/dateAndTimeHandler';
import './Home.css';
import { useEffect, useState } from 'react';
import ModalBookDetails from '../modal-book-details/ModalBookDetails';
import Spinner from '../spinner/Spinner';
import { booksAPI } from '../../api/books-api';
import { useNavigate } from 'react-router-dom';
import { commentsAPI } from '../../api/comments-api';
import { useAuthContext } from '../../context/AuthContext';

export default function Home() {
    const [book, setBook] = useState({});
    const [latestComments, setLatestComments] = useState([]);
    const [pastThreeBooks, setPastThreeBooks] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [modalBook, setModalBook] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const { isAuthenticated } = useAuthContext();
    const navigate = useNavigate();

    const openModal = (id) => {
        isOpen
            ? null
            : (async () => {
                const response = await booksAPI.getOne(id);
                setModalBook(response);
            })();
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        async function getBooks() {
            try {
                const currentBook = await booksAPI.getBookOfTheWeek();
                const pastBooks = await booksAPI.getPreviousDiscussions();

                setBook(currentBook);
                
                const commentsResponse = await commentsAPI.getAllComments(currentBook._id);

                setLatestComments(commentsResponse.slice(- 3));+

                setPastThreeBooks(pastBooks.slice(-3));
            } catch (err) {
                alert(err.message);
            } finally {
                setIsLoading(false);
            }
        }
        getBooks();
    }, []);

    return (
        <>
            {isLoading
                ? <Spinner />
                : <section id="home" className="home" onClick={() => isOpen && closeModal()}>
                    <div className='current-book-of-the-week'>
                        <div className='current-book-banner' onClick={() => openModal(book._id)}>
                            <img src={book.cover} alt="banner" />
                        </div>
                        <div className="current-book-details">
                            <h1 className='title-of-the-week'>Book of the Week - {book.title}</h1>
                            <h2 className='author-of-the-week'>By: {book.author}</h2>
                            <h3>Week: {getCurrentWeek()}</h3>
                            <p className='summary'>{book.summary}</p>
                            <div className='latest-comments'>
                                <h2 id='latest-comments'>Latest comments:</h2>
                                {latestComments.map(comment => (
                                    <div key={comment._id} className="comment">
                                        <strong className="comment-author">{comment.author.username}:</strong>
                                        <p className="comment-text">{comment.text}</p>
                                    </div>
                                ))}
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
                        <button onClick={() => navigate(`/book-of-the-week`)} className='join-discussion'>{isAuthenticated ? 'Join Discussion' : 'See Discussion'}</button>
                        <a href="#" className="thumbs-up">
                            <span>&#128077;</span>
                        </a>
                        <span><b>{book.likes}</b></span>
                        <a href="#" className="thumbs-down">
                            <span>&#128078;</span>
                        </a>
                        <span><b>{book.dislikes}</b></span>
                    </div>

                    <section className='past-discussion-section'>
                        <h1 className='past-section-title'>Previous Weeks&apos; Discussions</h1>
                        <div className="past-discussions">
                            {pastThreeBooks.map(pastBook => (
                                <div key={pastBook.details._id} className='past-book'>
                                    <div className='past-book-banner' onClick={() => openModal(pastBook.details._id)}>
                                        <img src={pastBook.details.cover} alt="banner" />
                                    </div>
                                    <div className="past-book-details">
                                        <h2 className='past-week-book-title'>{pastBook.details.title}</h2>
                                        <p className='summary'>{pastBook.details.summary}</p>
                                    </div>
                                    <button className='see-discussion'>See Discussion</button>
                                </div>
                            ))}
                        </div>
                    </section>
                </section >
            }


            <div className={`modal-content ${isOpen ? 'open' : 'closed'}`}>
                <ModalBookDetails book={modalBook} closeModal={closeModal} />
            </div>

        </>
    );
}
