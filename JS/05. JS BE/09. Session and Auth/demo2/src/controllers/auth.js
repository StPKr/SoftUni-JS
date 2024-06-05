const { login, register, getUserData } = require('../services/auth');

module.exports = {
    details: async (req, res) => {
        const userData = await getUserData();
        res.json(userData);
    },
    registerGet: (req, res) => {
        const error = req.session.error;
        const formData = req.session.formData;
        delete req.session.error;
        delete req.session.formData;

        res.render('register', { error, formData });
    },
    registerPost: async (req, res) => {
        const { username, password, repass } = req.body;

        try {
            if (!username) {
                throw new Error('Username is required');
            } else if (!password) {
                throw new Error('Password is required');
            } else if (password != repass) {
                throw new Error('Passwords don\'t match');
            }
            const user = await register(username, password);
            req.session.user = user;

            res.redirect('/');
        } catch (err) {
            req.session.error = {
                type: 'register',
                message: err.message,
            };
            req.session.formData = { username };
            res.redirect('/register');
            return;
        }
    },
    loginGet: (req, res) => {
        const error = req.session.error;
        delete req.session.error;

        res.render('login', { error });
    },
    loginPost: async (req, res) => {
        const { username, password } = req.body;

        try {
            const user = await login(username, password);
            req.session.user = user;

            res.redirect('/');
        } catch (err) {
            req.session.error = {
                type: 'login',
                message: err.message
            };
            res.redirect('/login');
            return;
        }
    },
    logouGet: (req, res) => {
        req.session.user = undefined;

        res.redirect('/');
    }
};