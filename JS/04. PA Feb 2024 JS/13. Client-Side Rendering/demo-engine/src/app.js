import { loadTemplate, render } from "./renderer.js";

const views = {
    'home': {
        title: 'Templating demo',
        content: 'This is the demo engine'
    },
    'catalog': {
        title: 'Catalog',
        content: 'Catalog page content'
    },
    'about': {
        title: 'About us',
        content: 'Rendering templates since 2014'
    },

}

document.querySelector('nav').addEventListener('click', (e) => {
    if (e.target.tagName == "A") {
        e.preventDefault();
        show(e.target.id);
    }
})
const root = document.querySelector('main');

show('home');

async function show(id) {
    const context = views[id];
    const layoutTemplate = await loadTemplate('layout');

    const result = render(layoutTemplate, context);

    root.innerHTML = result;
}