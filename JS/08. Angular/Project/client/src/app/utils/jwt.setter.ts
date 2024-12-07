export function setJwtCookie(token: string) {
    document.cookie = `jwt=${token}; path=/; secure; SameSite=Strict`;
}