import './ModalBookDetails.css';

export default function ModalBookDetails({ book, closeModal }) {
    return (
        <div className="book-details">
            <h2 className="title">{book.title}</h2>
            <img className="cover" src={book.cover} alt="Book Cover" />
            <p className="author">{book.author}</p>
            <p className="genre">{book.genre}</p>
            <p className="year">{book.year}</p>
            <p className="ISBN">{book.ISBN}</p>
            <p className="summary">{book.summary}</p>
            <button className='close-modal' onClick={closeModal}>X</button>
        </div>
    );
}
