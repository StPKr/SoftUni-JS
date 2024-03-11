// import { html, render } from './node_modules/lit-html/lit-html.js';
import { html, render } from "https://unpkg.com/lit-html@3.1.2/lit-html.js";
import { classMap } from "https://unpkg.com/lit-html@3.1.2/directives/class-map.js";
import { styleMap } from "https://unpkg.com/lit-html@3.1.2/directives/style-map.js";

const articles = [
    'Article 11',
    'Random article',
    'Anbelivabal'
];

const classes = {
    red: true,
    underline: true
}

const styles = {
    backgroundColor: 'orange',
    padding: '16px'
}
const template = (name, value) => html`
<h1 class=${classMap(classes)}>Hello, ${name}</h1>
<p>This part should not update</p>
<button @click=${onClick}>Experimental button</button>
<input style =${styleMap(styles)} .value=${value}>
<textarea .value=${value}></textarea>
<ul>
${articles.map(articleTemplate)} 
</ul>
<p>${null}</p>
`;

const articleTemplate = name => html`<li>${name}</li>`;

const root = document.querySelector('main');


document.querySelector('button').addEventListener('click', () => {
    render(template('Dynamic content'), root)
});

render(template('Lit-html', 5), root);

function onClick(e) {
    console.log(e);
    alert('Button has been clicked!');
}