import { del, get, post, put } from "./request.js";

const endpoints = {
    dashboard: '/data/motorcycles?sortBy=_createdOn%20desc',
    products: '/data/motorcycles',
    productById: '/data/motorcycles/'
}

export async function getAllProducts() {
    return await get(endpoints.dashboard);
}

export async function getProductById(id) {
    return await get(endpoints.productById + id);
}

export async function createProduct(model, imageUrl, year, mileage, contact, about) {
    return post(endpoints.products, {
        model,
        imageUrl,
        year,
        mileage,
        contact,
        about
    });
}

export async function updateProduct(id, data) {
    return put(endpoints.productById + id, data);
}

export async function deleteProduct(id) {
    return del(endpoints.productById + id);
}