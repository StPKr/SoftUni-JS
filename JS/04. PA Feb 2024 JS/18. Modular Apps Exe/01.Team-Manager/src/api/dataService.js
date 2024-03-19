import { api } from "./requester.js";

const BASE_URL = 'http://localhost:3030/';

const endpoints = {
    teams: 'data/teams',
    members: 'data/members',

}

async function getAllTeams() {
    return await api.get(BASE_URL + endpoints.teams);
}

async function createNewTeam(data) {
    return await api.post(BASE_URL + endpoints.teams, data);
}

async function getSingleTeam(id) {
    return await api.get(`${BASE_URL}${endpoints.teams}/${id}`);
}

async function editTeam(id, data) {
    api.put(`${BASE_URL}${endpoints.teams}/${id}`, data)
}

export const dataService = {
    getAllTeams,
    createNewTeam,
    getSingleTeam,
    editTeam
}