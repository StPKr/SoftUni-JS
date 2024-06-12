const { getAllMovies, getMovieById } = require('../services/movie');

module.exports = {
    home: async (req, res) => {
        const movies = await getAllMovies();

        for (const movie of movies) {
            movie.isAuthor = req.user && req.user._id == movie.author.toString();
        }

        res.render('home', { movies });
    },
    details: async (req, res) => {
        const id = req.params.id;
        const movie = await getMovieById(id);

        if (!movie) {
            res.render('404');
            return;
        }

        movie.isAuthor = req.user && req.user._id == movie.author.toString();
        movie.starRating = '&#x2605;'.repeat(movie.rating);

        res.render('details', { movie });
    },
    search: (req, res) => {
        res.render('search');
    }
};