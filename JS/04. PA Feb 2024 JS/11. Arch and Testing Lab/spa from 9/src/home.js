import { showView } from './nav.js';
import { get } from './request.js';

const section = document.getElementById('home-view');
section.remove();

export function showHomeView() {
    start();

    return section;
}

async function start() {
    const list = section.querySelector('#list');

    const movies = await getMovies();

    list.replaceChildren(...movies.map(createMoviePreview));
}

async function getMovies() {
    const url = 'http://localhost:3030/data/movies?select=_id%2Ctitle%2Cimg';
    return get(url);
}

function createMoviePreview(movie) {
    const element = document.createElement('li');
    element.innerHTML = `
    <a href="/details/${movie._id}">${movie.title}</a>
    `;

    element.querySelector('a').addEventListener('click', event => {
        event.preventDefault();
        showView('details-link', movie._id)
    });

    return element;
}

