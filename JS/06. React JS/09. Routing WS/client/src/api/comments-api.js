import { get, post } from "./requester"

const BASE_URL = 'http://localhost:3030/data/games';

const create = async (gameId, text) => await post(BASE_URL, { gameId, text });

const getAll = async (gameId) => {
    const params = new URLSearchParams({
        where: `gameId="${gameId}"`,
        load: `author=_ownerId:users`,
    });

    return await get(`${BASE_URL}?${params.toString()}`);

}
export const commentsAPI = {
    create,
    getAll
}

