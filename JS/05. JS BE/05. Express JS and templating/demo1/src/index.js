const path = require('path');
const express = require('express');
const { catalogRouter } = require('./catalog');
const { countMiddleware } = require('./middlewares/coiunter');
const { dataController } = require('./data');

const app = express();

const homeHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/static/style.css">
    <title>Document</title>
</head>
<body>
<h1>Home Page</h1>
<a href ="/">Home</a>
<a href = "/catalog">Catalog</a>
<img src="/static/cat.PNG"
</body>
</html>
`;

app.use('/static', express.static('static'));
app.use(countMiddleware);

app.get('/', (req, res) => {
    res.send(homeHtml);
});

// app.get('/static/style.css', (req, res) => {
//     res.sendFile(path.join(__dirname, '../','./static/style.css'));
// });

app.use('/catalog', catalogRouter);

app.get('/data', dataController);

app.get('*', (req, res) => {
    res.status(404);
    res.send('Not Found');
}); // '*' catches all so always put at the end

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});