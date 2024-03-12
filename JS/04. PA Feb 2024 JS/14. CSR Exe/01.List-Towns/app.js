import { html, render } from './node_modules/lit-html/lit-html.js'

const form = document.querySelector('form').addEventListener('submit', onSubmit);
const root = document.getElementById('root');

function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const townsList = formData.get('towns').split(', ');
    renderer(createTemplate(townsList));
}

function createTemplate(towns) {
    return html`
    <ul>
        ${towns.map(town => html`<li>${town}</li>`)}
    </ul>
    `
}

function renderer(temp) {
    render(temp, root);
}