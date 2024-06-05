module.exports = {
    homeController: (req, res) => {
        const user = req.session.user;
        res.render('home', { user });

    }
};