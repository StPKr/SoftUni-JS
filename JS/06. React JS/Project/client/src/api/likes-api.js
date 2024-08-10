import { get, del, post, put } from "./requester";

const BASE_URL = 'http://localhost:3030/data/likes'

const getLikesForBook = async (bookId) => {
    const params = new URLSearchParams({
        where: `bookId="${bookId}"`,
        count: '?'
    });

    return await get(`${BASE_URL}?${params.toString()}`);

}

const createLike = async (bookId) => {
    await post(BASE_URL, { bookId });
}

const removeLike = async (likeId) => {
    await del(`${BASE_URL}/${likeId}`)
}

const getDislikesForBook = async (bookId) => {
    const params = new URLSearchParams({
        where: `bookId="${bookId}"`,
        count: '?'
    });

    return await get(`${BASE_URL}?${params.toString()}`);

}

export const likesAPI = {
    getLikesForBook,
    getDislikesForBook,
    createLike,
    removeLike
}