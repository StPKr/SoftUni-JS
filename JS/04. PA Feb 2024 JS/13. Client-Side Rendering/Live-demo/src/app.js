
import { onNavigate, visit } from "./views/nav.js";

document.querySelector('nav').addEventListener('click', onNavigate);

visit('home');

