const { readTemplate } = require("./util");
const cats = require('../../data/cats.json');

function catFragment(cat) {
    return `
<li>
    <img src="${cat.imageUrl}">
    <h3>${cat.name}</h3>
    <p><span>Breed: </span>${cat.breed}/p>
    <p><span>Description: </span>${cat.description}</p>
    <ul class="buttons">
        <li class="btn edit"><a href="">Change Info</a></li>
        <li class="btn delete"><a href="">New Home</a></li>
    </ul>
</li>`;
}

async function homeHandler(req, res) {
    const template = await readTemplate('home/index');
    res.writeHead(200, [
        'Content-Type', 'text/html'
    ]);

    const html = template.replace('%%catContent', cats.map(catFragment).join('\n'));
    res.write(html);
    res.end();
}

module.exports = {
    homeHandler
}