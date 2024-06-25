export function convertFormDataToJson(formData) {
    const dataKeys = Object.keys(formData)
    const initArrData = {}
    dataKeys.forEach(function (key) {
            initArrData[key] = formData[key]
        }
    )
    return JSON.stringify(initArrData)
}


