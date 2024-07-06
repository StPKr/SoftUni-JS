import { useState } from 'react';
import './App.css'

function App() {
    const [movies, setMovies] = useState([
        'The Matrix',
        'Man of Steel',
        'The Case for Christ',
        'Lord of the Rings',
    ]);

    const buttonClickHandler = () => {
        setMovies((oldMovies) => {
            const newMovies = [...oldMovies];
            newMovies[3] = 'Harry Potter';
            newMovies.push('Avengers');
            newMovies.shift();

            return newMovies;
        });
    };


    return (
        <>
            <h1>Movies</h1>

            <ul>
                {movies.map(movie => <li key={movie}>{movie}</li>)}
            </ul>

            <button onClick={buttonClickHandler}>Change</button>
        </>
    )
}

export default App
