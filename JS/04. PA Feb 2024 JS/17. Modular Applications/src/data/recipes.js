import { get } from "./api.js";

const pageSize = 2;

export async function getRecipes(search, page) {
    let url = '/data/recipes';
    const countUrl = '/data/recipes?count';

    if (search) {
        url += '?where=' + encodeURIComponent(`name LIKE "${search}"`);
    } else if (page) {
        url += `?offset=${(page - 1) * pageSize}&pageSize=${pageSize}`;
    }

    const [recipes, count] = await Promise.all([
        get(url),
        get(countUrl)
    ])

    return {
        recipes,
        pages: Math.ceil(count/pageSize)
    };
}