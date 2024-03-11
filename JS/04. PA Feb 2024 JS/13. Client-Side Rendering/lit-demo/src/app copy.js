// import { html, render } from './node_modules/lit-html/lit-html.js';
import { html, render } from "https://unpkg.com/lit-html@3.1.2/lit-html.js";

let disabled = true;
const template = (name, clock) => html`
<h1>Hello, ${name}</h1>
<p>This part should not update</p>
${clock}
<button ?disabled =${disabled}>Experimental button</button>
`;

const clock = (time, color) => html`
<div>
<h2 class=${color}>Dynamic clock</h2>
<p>The time is ${time}</p>
</div>
`;

const root = document.querySelector('main');
let isRed = true;

document.querySelector('button').addEventListener('click', () => {
    render(template('Dynamic content'), root)
});

render(template('Lit-html', clock(new Date())), root);

setInterval(update, 1000);

function update() {
    isRed = !isRed;
    render(template('Lit-html', clock(new Date(), isRed ? 'red' : 'green')), root)
}