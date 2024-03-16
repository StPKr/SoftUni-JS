import { get } from "./api.js";

export async function getRecipes(){

    return get('/data/recipes');
}