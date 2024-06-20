const express = require('express');
const { router } = require('./controller');

const app = express();

app.use('/', express.static('client'));
app.use(express.json());
app.use(router);

app.listen(3000, () => {
    console.log('Server started');
});