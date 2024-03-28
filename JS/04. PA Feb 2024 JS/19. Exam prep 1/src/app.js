import { logout } from "./data/users.js";
import { page } from "./lib.js";
import { updateNav } from "./util.js";
import { showDashboardView } from "./views/dashboardView.js";
import { showCreateView } from "./views/createView.js";
import { showDetailsView } from "./views/detailsView.js";
import { showEditView } from "./views/editView.js";
import { showHome } from "./views/homevView.js";
import { showLoginView } from "./views/loginView.js";
import { showRegisterView } from "./views/register.js";

page('/', showHome);
page('/dashboard', showDashboardView);
page('/login', showLoginView);
page('/register', showRegisterView);
page('/create', showCreateView);
page('/dashboard/:id', showDetailsView);
page('/edit/:id', showEditView);


page.start();
updateNav();


document.getElementById('logoutBtn').addEventListener('click', async () => {
    await logout();
    updateNav();
    page.redirect('/');
}); // no need to make a separate logoutView file