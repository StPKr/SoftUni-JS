import { Link } from 'react-router-dom';
import { getCurrentWeek } from '../../util/dateHandler';
import './Home.css'
import { useEffect, useState } from 'react';
import { get } from '../../api/requester';


export default function Home() {
    const [book, setBook] = useState({});
    const [pastThreeBooks, setPastThreeBooks] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await get('/books');
            console.log(response)

            const books = Object.values(response);

            setBook(books[4]);
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
                                <p className='summary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id impedit velit exercitationem sint placeat nemo ullam amet pariatur iste, molestiae neque iure architecto ea minus.</p>
                            </div>
                            <button>See Discussion</button>
                        </div>
                    ))}

                </div>
            </section>
        </section>
    );
}