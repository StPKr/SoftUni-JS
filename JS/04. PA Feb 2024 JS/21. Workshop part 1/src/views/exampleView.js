/**
 * 
 * @param {import("@src/types").PageContext} ctx // only for us, helps typisation below
 */

import { html } from '@lit-html/lit-html.js';

export function showExample(ctx) {
    console.log('routing works', ctx.user);
    ctx.render(html`<h2>It works</h2>`);
}