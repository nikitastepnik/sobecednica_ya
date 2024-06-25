export function getKeysWithTrueValues(jsonObject) {
    let keysWithTrueValues = [];
    for (let key in jsonObject) {
        if (jsonObject.hasOwnProperty(key) && jsonObject[key] === true) {
            keysWithTrueValues.push(key);
        }
    }
    return keysWithTrueValues;
}