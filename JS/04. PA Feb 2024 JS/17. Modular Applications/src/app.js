import { page } from './lib.js'
import { showCatalog } from './views/catalog.js'

page('/', showCatalog);

page.start();