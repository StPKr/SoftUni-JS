import { render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs'
import { showHomeView } from './views/howView.js';
import { showLoginView } from './views/loginView.js';

const root = document.querySelector('main');

page('/', showHomeView);
page('/register', () => console.error('register'));
page('/login', showLoginView);
page('/logout', () => console.error('logout'));
page('/events', () => console.error('events'));
page('/addEvent', () => console.error('addEvent'));


page.start();

export function renderer(temp) { 
    render(temp, root);
}