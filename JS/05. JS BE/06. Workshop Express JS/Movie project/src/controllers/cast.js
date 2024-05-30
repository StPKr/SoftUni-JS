module.exports = {
    createGet: (req, res) => {
        res.render('cast-create');
    },
    createPost: (req, res) => {
        console.log(req.body);

        res.end();
    }
}