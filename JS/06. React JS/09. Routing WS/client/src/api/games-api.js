import * as request from './requester';

const BASE_URL = 'http://localhost:3030/data/comments'

const getAll = async () => {
    const result = await request.get(BASE_URL);

    const games = Object.values(result);

    return games;
}

const getOne = (gameId) => request.get(`${BASE_URL}/${gameId}`);

const create = (gameData) => request.post(`${BASE_URL}`, gameData);

const remove = (gameId) => request.del(`${BASE_URL}/${gameId}`);

const update = (gameId, gameData) => request.put(`${BASE_URL}/${gameId}`, gameData);

export const gamesAPI = {
    getAll,
    getOne,
    create,
    remove,
    update
}