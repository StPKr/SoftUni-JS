import { get, del, post, put } from "./requester";

const BASE_URL = 'http://localhost:3030/data/books'

const getAll = async () => {
    const result = await get(BASE_URL);

    const books = Object.values(result);

    return books;
}

const getLatest = async () => {
    const urlSearchParams = new URLSearchParams({
        sortBy: `title`,
        pageSize: 3,
    });

    const result = await get(`${BASE_URL}?${urlSearchParams.toString()}`);
    const latestBooks = Object.values(result);

    return latestBooks;
}

const getBookOfTheWeek = async () => {
    const urlSearchParams = new URLSearchParams({
        where: `isBookOfTheWeek=true`
    });

    const result = await get(`${BASE_URL}?${urlSearchParams.toString()}`);

    const bookOfTheWeek = result[0];

    return bookOfTheWeek;
}

const getOne = (bookId) => get(`${BASE_URL}/${bookId}`);

const create = (bookData) => post(`${BASE_URL}`, bookData);

const remove = (bookId) => del(`${BASE_URL}/${bookId}`);

const update = (bookId, bookData) => put(`${BASE_URL}/${bookId}`, bookData);

export const booksAPI = {
    getAll,
    getOne,
    create,
    remove,
    update,
    getLatest,
    getBookOfTheWeek
}