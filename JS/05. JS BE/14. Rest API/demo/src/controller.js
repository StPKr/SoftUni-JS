const { Router } = require('express');
const { getById, getAll, createEntry, deleteById } = require('./data');

const router = Router();

router.get('/data', (req, res) => {
    const data = getAll();

    res.json(data);
});

router.post('/data', (req, res) => {
    const record = createEntry(req.body);

    res.json(record);
});

router.get('/data/:id', (req, res) => {
    const record = getById(req.params.id);

    if (!record) {
        res.status(404).json({ message: 'Not found', code: 404 });
    } else {
        res.json(record);
    }
});

router.put('/data/:id', (req, res) => {
    const record = update(req.params.id, req.body);

    if (!record) {
        res.status(404).json({ message: 'Not found', code: 404 });
    } else {
        res.json(record);
    }
});

router.put('/data/:id', (req, res) => {
    console.log(req.body);

    res.end();
});

router.delete('/data/:id', (req, res) => {
    const record = deleteById(req.params.id);

    if (!record) {
        res.status(404).json({ message: 'Not found', code: 404 });
    } else {
        res.json(record);
    }
});


module.exports = { router }