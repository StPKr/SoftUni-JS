let counter = 0;
module.exports = {
    home: (req, res) => {
        counter++;
        res.render('home', { counter });
    }
};
