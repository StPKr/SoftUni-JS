function solve(inputArr) {
    let movies = [];
    for (let command of inputArr) {
        if (command.includes('addMovie')) {
            let movieName = command.split('addMovie ')[1];
            let movieObj = { name: movieName };
            movies.push(movieObj);

        } else if (command.includes('directedBy')) {
            let [movieName, directorName] = command.split(' directedBy ');
            let movie = movies.find(x => x.name == movieName);
            if (movie) {
                movie.director = directorName;
            }
        } else if (command.includes('onDate')) {
            let [movieName, date] = command.split(' onDate ');
            let movie = movies.find(movie => movie.name == movieName);

            if (movie) {
                movie.date = date;
            }
        }
    }
    for (let movie of movies) {
        if (movie.name && movie.director && movie.date){
            console.log(JSON.stringify(movie));
        }
    }
}
solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]
)