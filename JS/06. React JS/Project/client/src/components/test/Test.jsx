import { useEffect, useState } from 'react';
import './Test.css';
import { booksAPI } from '../../api/books-api';
import { likesAPI } from '../../api/likes-api';
import { dislikesAPI } from '../../api/dislikes-api';

export default function Test() {
    const [isOpen, setIsOpen] = useState(false);

    const handleModal = () => {
        isOpen ? setIsOpen(false) : setIsOpen(true);
    }

    const [books, setBooks] = useState([]);

    useEffect(() => {
        async function getBooks() {
            try {
                const currentBooks = await booksAPI.getMostLiked();

                setBooks(currentBooks);
                console.log(currentBooks)
                const likes = await likesAPI.getLikesForBook(currentBooks[0]._id);
                const dislikes = await dislikesAPI.getDislikesForBook(currentBooks[0]._id);
                console.log(likes);
                console.log(dislikes);


            } catch (err) {
                alert(err.message);
            }
        }
        getBooks();
    }, []);

    return (
        <>
            <ol>
                {books.map(book => (
                    <li key={book.ISBN}>
                        {book.title} - {book.likes}
                    </li>
                ))}
            </ol>
            <button className='test-button' onClick={handleModal}>Click me</button>
            <div className={`test-wrapper ${isOpen ? 'open' : 'closed'}`}>
                <div className='test-content'>
                    <div className="test-title-img">
                        <h1>Title goes here</h1>
                        <img src="https://placehold.co/300x450" alt="banner" />
                    </div>
                    <div className="test-details">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, nisi.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, nisi.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, nisi.</p>
                    </div>
                    <div className="test-additional-content">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor accusamus at totam deleniti nesciunt quas saepe eveniet aliquam non dicta.</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor accusamus at totam deleniti nesciunt quas saepe eveniet aliquam non dicta.</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor accusamus at totam deleniti nesciunt quas saepe eveniet aliquam non dicta.</p>
                    </div>
                </div>
            </div>
        </>
    );
}