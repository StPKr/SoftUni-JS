import { get, del, post, put } from "./requester";

const BASE_URL = 'http://localhost:3030/data/dislikes'

const getDislikesForBook = async (bookId) => {
    const params = new URLSearchParams({
        where: `bookId="${bookId}"`,
        count: '?'
    });

    return await get(`${BASE_URL}?${params.toString()}`);

}

export const dislikesAPI = {
    getDislikesForBook,
}