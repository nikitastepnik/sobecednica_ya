export function hasValueByKeyLocalStorage(localStorageKey, expectedValue) {
    return (window.localStorage.getItem(localStorageKey) === expectedValue)
}