export function isJsonAndNotNull(variable) {
    if (variable == null) {
        return false
    }
    try {
        JSON.parse(variable)
    } catch (e) {
        return false
    }
    return true
}