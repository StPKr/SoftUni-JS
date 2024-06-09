const { createMovie, getMovieById, updateMovie, deleteMovie } = require('../services/movie');

module.exports = {
    createGet: (req, res) => {
        res.render('create');
    },
    createPost: async (req, res) => {
        const authorId = req.user._id;
        const errors = {
            title: !req.body.title,
            genre: !req.body.genre,
            director: !req.body.director,
            year: !req.body.year,
            imageURL: !req.body.imageURL,
            rating: !req.body.rating,
            description: !req.body.description
        };

        if (Object.values(errors).includes(true)) {
            res.render('create', { movie: req.body, errors });
            return;
        }

        const result = await createMovie(req.body, authorId);

        res.redirect('/details/' + result._id);
    },
    editGet: async (req, res) => {
        const movieId = req.params.id;

        let movie;

        try {
            movie = await getMovieById(movieId);

            if (!movie) {
                throw new Error('Movie not found');
            }
        } catch (err) {
            res.render('404');
            return;
        }

        const isAuthor = req.user._id == movie.author.toString();

        if (!isAuthor) {
            res.redirect('/login');
            return;
        }

        res.render('edit', { movie });
    },
    editPost: async (req, res) => {
        const movieId = req.params.id;
        const authorId = req.user._id;

        const errors = {
            title: !req.body.title,
            genre: !req.body.genre,
            director: !req.body.director,
            year: !req.body.year,
            imageUrl: !req.body.imageURL,
            rating: !req.body.rating,
            description: !req.body.description
        };

        if (Object.values(errors).includes(true)) {
            res.render('edit', { movie: req.body, errors });
            return;
        }
        try {
            await updateMovie(movieId, req.body, authorId);
        } catch (err) {
            if (err.message == 'Access denied') {
                res.redirect('/login');
            } else {
                res.render('404');
            }

            return;
        }

        res.redirect('/details/' + movieId);
    },
    deleteGet: async (req, res) => {
        const movieId = req.params.id;

        let movie;

        try {
            movie = await getMovieById(movieId);

            if (!movie) {
                throw new Error('Movie not found');
            }
        } catch (err) {
            res.render('404');
            return;
        }

        const isAuthor = req.user._id == movie.author.toString();

        if (!isAuthor) {
            res.redirect('/login');
            return;
        }

        res.render('delete', { movie });
    },
    deletePost: async (req, res) => {
        const movieId = req.params.id;
        const authorId = req.user._id;

        try {
            await deleteMovie(movieId, authorId);
        } catch (err) {
            if (err.message == 'Access denied') {
                res.redirect('/login');
            } else {
                res.render('404');
            }

            return;
        }

        res.redirect('/');
    },
};