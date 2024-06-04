function parseCookieData(cookieData) {
    const cookies = Object.fromEntries(cookieData
        .split(';')
        .map(kvp => kvp.trim())
        .filter(kvp => kvp)
        .map(kvp => kvp.split('=')));

    return cookies;
}

module.exports = { parseCookieData }