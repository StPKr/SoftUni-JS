import { html } from '@lit-html/lit-html.js';
import { loading, recipeCard } from '@src/views/partials.js';
import { getAllRecipes } from '@src/data/recipes.js';


const catalogTemplate = (recipes) => html`
<section id="catalog">
    ${recipes.map(recipeCard)}
</section>
`;

/**
 * 
 * @param {import("@src/types").PageContext} ctx
 */
export async function showCatalog(ctx) {
    const recipes = ctx.data;

    ctx.render(catalogTemplate(recipes.results));
}