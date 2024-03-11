import { showHome } from "./home.js";
import { showRegister } from "./register.js";

const views = {
    'home': showHome,
    'register': showRegister
}

export function onNavigate(e) {
    if (e.target.tagName == "A") {
        e.preventDefault();
        visit(e.target.id);
    }
}

export function visit(id) {
    const view = views[id];
    view()
}