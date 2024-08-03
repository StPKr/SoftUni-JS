import * as request from './requester';

const BASE_URL = 'http://localhost:3030/data/games'

const getAll = async () => {
    const result = await request.get(BASE_URL);

    const games = Object.values(result);

    return games;
}

const getLatest = async () => {
    const urlSearchParams = new URLSearchParams({
        sortBy: `_createdOn desc`,
        pageSize: 3,
    }); // this only works if the 'space' is correctly transformed into %20, otherwise it breaks, we can hardcode this in the URL below by adding "?sortBy=_createdOn%20desc&pageSize=3"

    const result = await request.get(`${BASE_URL}?${urlSearchParams}`);

    const latestGames = Object.values(result);

    return latestGames;
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
    update,
    getLatest
}