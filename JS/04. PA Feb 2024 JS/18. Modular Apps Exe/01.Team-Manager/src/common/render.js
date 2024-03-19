import { render } from "../../node_modules/lit-html/lit-html.js";

const main = document.querySelector('main');

export function renderer(template) {
    render(template, main);
}
