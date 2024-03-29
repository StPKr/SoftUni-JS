import { getAllRecipes, getRecipeById } from '@src/data/recipes.js';

/**
 * We can write function description here...
 * @param {"recipes" | "comments"} collection // limits it only to these two, prevents typos
 * @param {string=} objectId // the = makes it optional
 * @returns 
 */
export function preload(collection, objectId) {
    return async function (ctx, next) {
        if (collection == 'recipes') {
            ctx.data = await queryRecipies(objectId);
        }

        next();
    };
}

async function queryRecipies(id) {
    if (id) {
        return getRecipeById(id);
    } else {
        return getAllRecipes();
    }
}