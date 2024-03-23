import { logout } from "./data/users.js";
import { page } from "./lib.js";
import { updateNav } from "./util.js";
import { showCatalogView } from "./views/catalogView.js";
import { showCreateView } from "./views/createView.js";
import { showDetailsView } from "./views/detailsView.js";
import { showEditView } from "./views/editView.js";
import { showHome } from "./views/homevView.js";
import { showLoginView } from "./views/loginView.js";
import { showRegisterView } from "./views/register.js";

updateNav();

page('/', showHome);
page('/catalog', showCatalogView);
page('/login', showLoginView);
page('/register', showRegisterView);
page('/create', showCreateView);
page('/catalog/:id', showDetailsView);
page('/edit/:id', showEditView);


page.start();


document.getElementById('logoutBtn').addEventListener('click', async () => {
    await logout();
    updateNav();
    page.redirect('/');
}); // no need to make a separate logoutView file