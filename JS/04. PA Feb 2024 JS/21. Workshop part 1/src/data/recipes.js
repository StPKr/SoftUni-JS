import { get } from './request.js';

const endpoints = {
    recipes: '/classes/Recipes',
    recipeById: '/classes/Recipes/'
};

/**
 * @returns {Promise<{results: RecipeModel[]}>}
 */
export async function getAllRecipes() {
    return get(endpoints.recipes);
}

/**
 * 
 * @param {string} id 
 * @returns {Promise<RecipeModel>}
 */
export async function getRecipeById(id) {
    return get(endpoints.recipeById + id);
}


/**
 * @typedef {Object} RecipeModel
 * @property {string} objectId
 * @property {import("./request").Pointer} owner
 * @property {string} name
 * @property {string} img
 * @property {Array<string>} ingredients
 * @property {Array<string>} steps
 */