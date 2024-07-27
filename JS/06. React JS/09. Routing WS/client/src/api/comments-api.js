import { get, post } from "./requester"

const BASE_URL = 'http://localhost:3030/jsonstore/games';

const buildUrl = (gameId) => `${BASE_URL}/${gameId}/comments`

const create = async (gameId, username, text) => await post(buildUrl(gameId), { username, text });


const getAll = async (gameId) => {
    const result = await get(buildUrl(gameId));

    const comments = Object.values(result);

    return comments;
}
export const commentsAPI = {
    create,
    getAll
}

