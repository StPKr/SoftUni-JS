import { get, del, post, put } from "./requester";

const BASE_URL = 'http://localhost:3030/data/books'

const getAll = async () => {
    const result = await get(BASE_URL);

    const books = Object.values(result);

    return books;
}

const getMostLiked = async () => {
    const urlSearchParams = new URLSearchParams({
        sortBy: `likes desc`,
        pageSize: 5,
    });

    let url = `${BASE_URL}?${urlSearchParams.toString()}`;

    // Replace spaces encoded as `+` with `%20` since server throws an error
    url = url.replace(/\+/g, '%20');

    const result = await get(url);
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

const getPreviousDiscussions = async () => {
    const urlSearchParams = new URLSearchParams({
        load: `details=bookId:books`,
    });

    const url = 'http://localhost:3030/data/prevDiscussions'

    const result = await get(`${url}?${urlSearchParams.toString()}`);

    const prevDiscussions = Object.values(result);

    return prevDiscussions;
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
    getMostLiked,
    getBookOfTheWeek,
    getPreviousDiscussions
}