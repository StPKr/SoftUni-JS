import { html, render } from './node_modules/lit-html/lit-html.js';
import { towns } from './towns.js'

document.querySelector('button').addEventListener('click', search);

const townsRoot = document.getElementById('towns');
const resultRoot = document.getElementById('result');
const inputRef = document.getElementById('searchText');

update();

function update(match) {
   render(ulTemplate(towns, match), townsRoot)
}

function ulTemplate(towns, match) {
   return html`<ul>${towns.map(town => createLiTemplate(town, match?.includes(town)))}</ul>`
}

function createLiTemplate(town, isActive) {
   return html`<li class=${isActive ? 'active' : ''}>${town}</li>`
}

function search() {
   const searchText = inputRef.value;
   const match = towns.filter(town => town.includes(searchText));
   update(match);
   renderMatchcount(match.length);
}

function renderMatchcount(count) {
   render(html`${count} matches found`, resultRoot)
}