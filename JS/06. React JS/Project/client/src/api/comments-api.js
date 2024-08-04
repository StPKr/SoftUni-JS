import { get, post } from "./requester"

const BASE_URL = 'http://localhost:3030/data/comments';

const createComment = async (bookId, text) => await post(BASE_URL, { bookId, text });

const getAllComments = async (bookId) => {
    const params = new URLSearchParams({
        where: `bookId="${bookId}"`,
        load: `author=_ownerId:users`,
    });

    return await get(`${BASE_URL}?${params.toString()}`);

}
export const commentsAPI = {
    createComment,
    getAllComments
}

