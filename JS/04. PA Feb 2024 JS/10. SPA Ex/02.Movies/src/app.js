import { showRegisterView } from './register.js';
import { showHome } from './home.js';


document.querySelectorAll('section').forEach(section => section.style.display = 'none');
const userNav = document.querySelector('li.user');
const guestNav = document.querySelector('li.guest');
document.querySelector('nav').addEventListener('click', onNavigate);

const routes = {
    '/register': showRegisterView,
    '/home':showHome
}

function onNavigate(e) {
    if (e.target.tagName !== "A" || !e.target.href) {
        return
    }
    e.preventDefault();
    const url = new URL(e.target.href);
    const path = url.pathname;
    routes[path]();
}

const userData = JSON.parse(sessionStorage.getItem('userData'));

function updateNav() {
    if (userData) {
        userNav.forEach(li => {
            li.style.display = 'block';
        })
        guestNav.forEach(li => {
            li.style.display = 'none';
        })

    } else {
        userNav.forEach(li => {
            li.style.display = 'none';
        })
        guestNav.forEach(li => {
            li.style.display = 'block';
        })
    }
}