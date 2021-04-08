export const setLocalStorage = (key, val) => {
    localStorage.setItem(key, val);
}

export const getLocalStorage = (key) => {
    return localStorage.getItem(key);
}

export const delLocalStorage = (key) => {
    localStorage.removeItem(key);
}