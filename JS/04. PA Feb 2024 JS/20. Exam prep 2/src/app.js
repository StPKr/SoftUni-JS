import { page } from "./lib.js";
import { updateNav } from "./util.js";
import { showHome } from "./views/homeView.js";
import { showLoginView } from "./views/loginView.js";
import { showRegisterView } from "./views/registerView.js";
import { logout } from "./data/users.js";
import { showDashboardView } from "./views/dashboardView.js";
import { showCreateView } from "./views/createView.js";
import { showDetailsView } from "./views/detailsView.js";
import { showEditView } from "./views/editView.js";
import { showSearchView } from "./views/searchView.js";

page('/', showHome);
page('/login', showLoginView);
page('/register', showRegisterView);
page('/dashboard', showDashboardView);
page('/addMotorcycle', showCreateView);
page('/dashboard/:id', showDetailsView);
page('/edit/:id', showEditView);
page('/search', showSearchView);


page.start();
updateNav();

document.querySelector('a[data-id="logoutBtn"]').addEventListener('click', async () => {
    await logout();
    updateNav();
    page.redirect('/');
});

