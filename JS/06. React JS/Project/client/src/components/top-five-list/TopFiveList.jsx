import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './TopFiveList.css';
import { booksAPI } from "../../api/books-api";
import Spinner from "../spinner/Spinner";

export default function TopFiveList() {
    const [pastThreeBooks, setPastThreeBooks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        (async () => {
            try {
                const response = await booksAPI.getMostLiked('');

                setPastThreeBooks(response)
            } catch (err) {
                alert(err.message);
            } finally {
                setIsLoading(false);
            }
        })();
    }, []);

    const truncateSummary = (summary) => {
        const words = summary.split(' ');
        if (words.length > 10) {
            return words.slice(0, 15).join(' ') + '...';
        }
        return summary;
    };

    return (
        <>
            {isLoading
                ? <Spinner />
                : <>
                    <h1 id="top-five">Top Rated Books</h1>
                    <div id="top-rated-books">
                        <div className="past-discussions">
                            {pastThreeBooks.map(pastBook => (
                                <div key={pastBook._id} className='past-book'>
                                    <div className='past-book-banner'>
                                        <Link to={`/books/${pastBook._id}`}>
                                            <img src={pastBook.cover} alt="banner" />
                                        </Link>
                                    </div>
                                    <div className="past-book-details">
                                        <h2 className='past-week-book-title'>{pastBook.title}
                                        </h2>
                                        <p className='summary'>{truncateSummary(pastBook.summary)}</p>
                                    </div>
                                    <div>
                                        {/* <button className='see-discussion'>See Discussion</button> */}
                                        <a href="#" className="thumbs-up" >
                                            <span>&#128077;</span>
                                        </a>
                                        <span><b>
                                            {pastBook.likes}
                                        </b></span>
                                        <a href="#" className="thumbs-down" >
                                            <span>&#128078;</span>
                                        </a>
                                        <span><b>
                                            {pastBook.dislikes}
                                        </b></span>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </>
            }
        </>
    );
}