export function convertDataFromSessionStorageToExpectedFormat(json, schema) {
    if (!json) {
        return {}
    }

    let keys = Object.keys(json)
    for (let key of keys) {
        switch (schema.properties[key].type) {
            case 'string':
                json[key] = String(json[key])
                break
            case 'number':
                json[key] = Number(json[key])
                break
            case 'integer':
                json[key] = Number(json[key])
                break
            default:
                json[key] = String(json[key])
        }
    }

    return json
}