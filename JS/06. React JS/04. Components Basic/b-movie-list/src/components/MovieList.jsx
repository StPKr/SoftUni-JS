import MovieListItem from "./MovieListItem";

export default function MovieList(props) {
    return (
        <>
            <h1>{props.title}</h1>

            <ul>
                <MovieListItem url="https://www.imdb.com/title/tt0133093/">
                    {props.movies[0]}
                </MovieListItem>
                <MovieListItem>{props.movies[1]}</MovieListItem>
                <MovieListItem>{props.movies[2]}</MovieListItem>
                <MovieListItem url="https://www.imdb.com/title/tt6113488/">
                    {props.movies[3]}
                </MovieListItem>
            </ul>
        </>
    );
}
