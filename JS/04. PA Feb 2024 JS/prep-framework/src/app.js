import { page } from "./lib.js";
import { showExample } from "./views/exampleView.js";
//TODO remove these imports after testing
import * as api from './data/request.js';
import * as userApi from './data/users.js'

page('/', showExample);

page.start();


//TODO remove these properties after testing
window.api = api;
window.userApi = userApi;