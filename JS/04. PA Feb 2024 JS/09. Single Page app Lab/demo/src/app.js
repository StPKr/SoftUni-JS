import { add, product as multiply } from './util.js';

const result = add(5, 3);

console.log(result, multiply(2, 2));

const h1 = document.querySelector('h1');
h1.textContent += ' Dynamic content.';