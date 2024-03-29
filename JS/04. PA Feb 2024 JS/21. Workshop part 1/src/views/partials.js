import { html } from '@lit-html/lit-html.js';

export const loading = () => html`<p style="color: white">Loading...</p>`;

export const recipeCard = (recipe) => html`
<article class="preview">
    <div class="title">
        <h2>${recipe.name}</h2>
    </div>
    <div class="small">
        <img src=${recipe.img}>
    </div>
</article>
    `;