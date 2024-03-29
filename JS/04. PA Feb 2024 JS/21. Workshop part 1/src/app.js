import page from '@page/page.mjs';

import { session } from '@src/middlewears/session.js';
import { renderer } from '@src/middlewears/render.js';
import { loading } from '@src/middlewears/loading.js';
import { preload } from '@src/middlewears/preload.js';

import { showCatalog } from './views/catalog.js';

page(session());
page(renderer(document.querySelector('main')));
page('/', loading(), preload('recipes'), showCatalog);

page.start();
