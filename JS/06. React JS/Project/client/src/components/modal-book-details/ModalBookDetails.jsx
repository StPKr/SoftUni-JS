import { useNavigate } from 'react-router-dom';
import './ModalBookDetails.css';
import { booksAPI } from '../../api/books-api';
import { useAuthContext } from '../../context/AuthContext';

export default function ModalBookDetails({ book, closeModal }) {
    const { userId } = useAuthContext();
    const navigate = useNavigate();

    const bookDeleteHandler = async () => {
        const isConfirmed = confirm(`Are you sure you want  to delete ${book.title}? Any accumulated comments or likes will be permanently lost!`);

        if (!isConfirmed) {
            return;
        }

        try {
            await booksAPI.remove(book._id);

            navigate('/');
        } catch (err) {
            console.log(err.message);
        }
    }

    const isOwner = userId === book._ownerId;
    return (
        <div className="book-details">
            <h2 className="title">{book.title}</h2>
            <img className="cover" src={book.cover} alt="Book Cover" />
            <p className="author">{book.author}</p>
            <p className="genre">{book.genre}</p>
            <p className="year">{book.year}</p>
            <p className="ISBN">{book.ISBN}</p>
            <p className="summary">{book.summary}</p>
            {/* <button className='close-modal' onClick={closeModal}>X</button> */}
            {isOwner &&
                <div className="book-buttons">
                    <button onClick={() => { navigate(`/books/${book._id}/edit`) }}>Edit</button>
                    <button onClick={bookDeleteHandler}>Delete</button>
                </div>
            }
        </div>
    );
}
