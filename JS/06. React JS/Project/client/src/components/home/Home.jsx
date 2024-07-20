import { Link } from 'react-router-dom';
import { getCurrentWeek } from '../../util/dateHandler';
import './Home.css'
import { useEffect, useState } from 'react';


export default function Home() {
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
        <section id="home" className="home">
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
                    <h3>Week: {getCurrentWeek()}</h3>
                    <p className='current-book-description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed neque aliquid similique totam cupiditate labore illum quaerat alias, exercitationem adipisci architecto dolorem temporibus reiciendis nobis facere reprehenderit. Ipsam ea tempora dolorum aspernatur eaque blanditiis numquam aliquam possimus eos. Est ipsum deserunt fuga nostrum magnam quasi, nihil maiores aliquid exercitationem soluta.</p>

                    <div className='top-comments'>
                        <h2>Most-popular comments</h2>
                        <p className='comment'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, laborum.</p>
                        <p className='comment'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia harum molestias voluptatibus. Soluta sapiente dicta aut cumque illo vitae facere cupiditate?.</p>
                        <p className='comment'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda fugiat necessitatibus eos unde fuga nobis, totam vitae!</p>

                    </div>
                </div>
                <div>
                    <button>Join Discussion</button>
                </div>
            </div>

            <section className='past-discussion-section'>
                <h1 className='past-section-title'>Previous Weeks&apos; Discussions</h1>
                <div className="past-discussions">
                    {pastThreeBooks.map(pastBook => (
                        <div key={pastBook.ISBN} className='past-book'>
                            <div className='past-book-banner'>
                                <Link to={`/catalog/${pastBook.ISBN}`}>
                                    <img src={pastBook.cover} alt="banner" />
                                </Link>
                            </div>
                            <div className="past-book-details">
                                <h2 className='past-week-book-title'>{pastBook.title}
                                </h2>
                                <p className='past-book-description'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, soluta facilis? In fugiat fugit, veritatis exercitationem incidunt aut vitae labore quas cupiditate vel quibusdam ut pariatur. Cupiditate saepe labore inventore neque, aperiam autem totam optio omnis molestiae tenetur sequi distinctio voluptatem sed, unde perferendis quibusdam dignissimos quis? Iure repellendus aperiam porro aspernatur quas possimus ducimus, ipsam facilis culpa reprehenderit totam fuga voluptates qui repellat placeat odit quaerat reiciendis eligendi officia deserunt illum! Expedita sapiente a, esse atque ab, eligendi eius tenetur repellat laborum obcaecati eos recusandae nostrum? Aspernatur minus sit consequuntur odio voluptatibus facilis similique nam debitis enim! Aliquid, ipsum?</p>
                            </div>
                            <button>See Discussion</button>
                        </div>
                    ))}

                </div>
            </section>
        </section>
    );
}