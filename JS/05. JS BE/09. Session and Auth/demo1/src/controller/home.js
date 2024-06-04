const { Router } = require('express');
const { parseCookieData } = require('../util');

const router = Router();

router.get('/', (req, res) => {
    const cookieData = req.headers['cookie'];
    const cookies = parseCookieData(cookieData);

    const useDark = cookies.theme == 'dark';

    req.session.message = 'hello';

    res.render('home', { useDark });
});

router.get('/set', (req, res) => {
    res.setHeader('Set-Cookie', 'my-cookie=hello; HttpOnly; Secure');

    res.redirect('/');
});

router.get('/get', (req, res) => {
    const cookieData = req.headers['cookie'];
    console.log(cookieData);

    res.render('get');
});

router.get('/use-ligth', (req, res) => {
    res.setHeader('Set-Cookie', 'theme=light');

    res.redirect('/');
});

router.get('/use-dark', (req, res) => {
    res.setHeader('Set-Cookie', 'theme=dark');

    res.redirect('/');
});

module.exports = { router };