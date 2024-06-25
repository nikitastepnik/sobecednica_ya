export function formatDateTimeInMoscow(date) {
    const options = {
        timeZone: 'Europe/Moscow',
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    };
    const formattedDate = date.toLocaleString('en-GB', options)
    return formattedDate.replaceAll('/', '.')
}


