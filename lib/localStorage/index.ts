type LocalStorage = {
    key: string,
    value: string | Object
}

export const saveToLocalStorage = ({key, value}: LocalStorage) => {
    localStorage.setItem(key, JSON.stringify(value));
};

export const removeFromLocalStorage = (key: string) => {
    localStorage.removeItem(key);
};

export const retrieveFromLocalStorage = (key: string) => {
    return localStorage.getItem(key);
};
