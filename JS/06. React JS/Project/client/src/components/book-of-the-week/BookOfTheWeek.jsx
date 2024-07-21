import './BookOfTheWeek.css'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function CurrentDiscussion() {
    const [book, setBook] = useState({});
    const [pastThreeBooks, setPastThreeBooks] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await fetch('http://localhost:3030/jsonstore/library/books');

            const result = await response.json();

            const books = Object.values(result);

            setBook(books[4]);
            setPastThreeBooks(books.slice(0, 3))
        })();
    }, []);

    return (
        <>
            <div className='current-book-of-the-week'>
                <div className='current-book-banner'>
                    <Link to={`/catalog/${book.ISBN}`}>
                        <img src={book.cover} alt="banner" />
                    </Link>
                </div>
                <div className="current-book-details">
                    <h1 className='title-of-the-week'>Book of the Week - {book.title}
                    </h1>
                    <h2 className='author-of-the-week'>By: {book.author}</h2>
                    <h3>Week: TODO</h3>
                    <p className='summary'>{book.summary}</p>


                    <div>

                    </div>
                    <div className='latest-comments'>
                        <h2>Latest comments:</h2>
                        <p className='comment'>Author: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque accusamus, eius, cupiditate nesciunt aut earum eum error, nostrum rem porro eaque nihil sint eos laborum.</p>
                        <p className='comment'>Author: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas aliquid labore expedita ullam porro voluptatum repudiandae assumenda.</p>
                        <p className='comment'>Author: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non aliquam magni aut, quos autem ex dolor id officiis voluptatum officia hic, quam quibusdam quaerat aspernatur blanditiis ea nulla earum distinctio placeat consequuntur quod numquam rem assumenda! Ratione eveniet omnis, necessitatibus ipsa sit dolores odit eaque. Corporis numquam obcaecati unde?</p>

                    </div>
                </div>
            </div>
            <div>
                <button className='join-discussion'>Join Discussion</button>
                <a href="#" className="thumbs-up" >
                    <span>&#128077;</span>
                </a>
                25
                <a href="#" className="thumbs-down" >
                    <span>&#128078;</span>
                </a>
                33
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