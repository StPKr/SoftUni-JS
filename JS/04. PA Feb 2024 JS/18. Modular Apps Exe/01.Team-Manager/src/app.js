import page from '../node_modules/page/page.mjs';
import { showBrowseTeamView } from './views/browseTeamView.js';
import { showDetailsView } from './views/detailsView.js';
import { showHomeView } from './views/home.js';
import { showLoginView } from './views/login.js';
import { logout } from './views/logout.js';
import { showRegsiterView } from './views/register.js';

page('/', showHomeView);
page('/home', showHomeView);
page('/browse-team', showBrowseTeamView);
page('/my-team', () => console.error('my-team'));
page('/login', showLoginView);
page('/register', showRegsiterView);
page('/logout', logout);
page('/create', () => console.error('create'));
page('/details/:id', showDetailsView);

page.start();