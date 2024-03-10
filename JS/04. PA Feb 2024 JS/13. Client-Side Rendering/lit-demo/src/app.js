// import { html, render } from './node_modules/lit-html/lit-html.js';
import { html, render } from "https://unpkg.com/lit-html@3.1.2/lit-html.js";

let template = (name) => html`<h1>Hello ${name}</h1>`;
const root = document.querySelector('main');

render(template('Lit-html'), root);

function myTag(strings, ...params){
    console.log(strings, params);

    return '';
}

myTag`Hello ${'inserted value'}, this is a tagged template.`;