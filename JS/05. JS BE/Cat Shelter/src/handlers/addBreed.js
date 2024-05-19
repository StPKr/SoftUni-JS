const { addBreed } = require('../model');
const { readTemplate, layout } = require('../util');

async function addBreedHandler(req, res) {
    const template = await readTemplate('addBreed');

    res.writeHead(200, [
        'Content-Type', 'text/html'
    ]);
    res.write(await layout(template));
    res.end();
}

async function postBreedHandler(req, res) {
    let data = '';

    req.on('data', (chunk) => data += chunk.toString());
    req.on('end', async () => {
        const formData = new URLSearchParams(data);
        const breed = formData.get('breed');

        if (breed) {
            await addBreed(breed);

            res.writeHead(301, [
                'Location', '/'
            ]);
            res.end();
        } else {
            res.writeHead(301, [
                'Location', '/cats/add-breed'
            ]);
            res.end();
        }
    });
}

module.exports = {
    addBreedHandler,
    postBreedHandler
};