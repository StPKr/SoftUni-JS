function setUserData(data) {
    return sessionStorage.setItem('userData', JSON.stringify(data));
}

function getUserData() {
    return JSON.parse(sessionStorage.getItem('userData'));
}

function getUserId(data) {
    return getUserData()?._id;
}

function getToken() {
    return getUserData()?.accessToken;
}

function clearUserData() {
    sessionStorage.removeItem('userData');
}

function hasOwner(itemOwnerId) {
    return getUserId() === itemOwnerId;
}

export const userHelper = {
    setUserData,
    getUserData,
    getUserId,
    getToken,
    clearUserData,
    hasOwner
}