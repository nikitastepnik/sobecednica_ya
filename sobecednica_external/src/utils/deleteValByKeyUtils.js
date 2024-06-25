export function deleteValByKeyInObject(object, key) {
    delete object[key]
    return object
}