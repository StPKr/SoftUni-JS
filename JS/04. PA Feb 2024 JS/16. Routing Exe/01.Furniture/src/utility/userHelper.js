function setUserData(userData) {
    sessionStorage.setItem('userData', JSON.stringify(userData));
}

function getUserData() {
    return JSON.parse(sessionStorage.getItem('userData'));
}

function clearUserData() {
    sessionStorage.removeItem('userData');
}

function getUserToken() {
    const userData = getUserData();
    return userData.accessToken;
}

function getUserId() {
    const userData = getUserData();
    return userData._id;
}

function hasOwner(iemId) {
    const id = getUserId();
    return ownerId === id;
}

export const userHelper = {
    setUserData,
    getUserData,
    clearUserData,
    getUserToken,
    getUserId,
    hasOwner
}