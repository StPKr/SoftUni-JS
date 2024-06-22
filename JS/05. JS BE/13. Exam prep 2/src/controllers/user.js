const { Router } = require('express');
const { body, validationResult } = require('express-validator');

const { isGuest, isUser } = require('../middlewares/guards');
const { register, login } = require('../services/user');
const { createToken } = require('../services/jwt');
const { parseError } = require('../util');

const userRouter = Router();

userRouter.get('/register', isGuest(), (req, res) => {
    res.render('register');
});

userRouter.post('/register', isGuest(),
    body('username').trim().isLength({ min: 2 }).withMessage('Username must be at least 2 chars long!'),
    body('email').trim().isEmail().withMessage('Invalid email format').isLength({ min: 10 }).withMessage('Email must be at least 10 chars long!'),
    body('password').trim().isLength({ min: 4 }).withMessage('Passwords must be at least 4 chars long!'),
    body('repass').trim().custom((value, { req }) => value == req.body.password).withMessage('Passwords don\'t match!'),
    async (req, res) => {
        const { username, email, password } = req.body;
        try {
            const validation = validationResult(req);

            if (validation.errors.length) {
                throw validation.errors;
            }

            const result = await register(username, email, password);
            const token = createToken(result);
            res.cookie('token', token, { httpOnly: true });

            res.redirect('/');
        } catch (err) {
            res.render('register', { data: { username, email }, errors: parseError(err).errors });
        }
    });

userRouter.get('/login', isGuest(), (req, res) => {
    res.render('login');
});

userRouter.post('/login', isGuest(),
    body('email').trim(),
    body('password').trim(),
    async (req, res) => {
        const { email, password } = req.body;
        try {
            const result = await login(email, password);
            const token = createToken(result);
            res.cookie('token', token, { httpOnly: true });

            res.redirect('/');
        } catch (err) {
            res.render('login', { data: { email }, errors: parseError(err).errors });
        }
    });

userRouter.get('/logout', isUser(), (req, res) => {
    res.clearCookie('token');
    res.redirect('/');
});

module.exports = { userRouter }
