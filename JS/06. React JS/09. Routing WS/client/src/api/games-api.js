import * as request from './requester';

const BASE_URL = 'http://localhost:3030/jsonstore/games'

export const getAll = () => request.get(BASE_URL);
