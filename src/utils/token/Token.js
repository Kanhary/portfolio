export function setToken(tokenKey, token) {
    return localStorage.setItem(tokenKey, token);
}

export function getToken(tokenKey) {
    return localStorage.getItem(tokenKey);
}

export function removeToken(tokenKey) {
    if (getToken(tokenKey)) {
        return localStorage.removeItem(tokenKey);
    }
    return null;
}
