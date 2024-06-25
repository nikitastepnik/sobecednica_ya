export function cutTableColumnHeader(header) {
    let shortCutHeader = removeExtraSpaces(header)

    if (shortCutHeader.length > 100) {
        return shortCutHeader.slice(0, 100) + '...'
    }

    return shortCutHeader
}


export function removeExtraSpaces(str) {
    return str.replace(/\s{2,}/g, ' ').trim().replace(/,\s+/g, ',');
}