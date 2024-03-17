import { page } from './lib.js'
import { showCatalog } from './views/catalog.js'
import { notify } from './notification.js'
import { showCreate } from './views/create.js';
import { login } from './data/users.js';

// confirm('Are you sure?') - modal example
page('/', showCatalog);
page('/create', showCreate);


page.start();

window.notify = notify;