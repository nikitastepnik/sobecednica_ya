import {sortObjectItemsWithOptions} from "../../sortObjItems";

export function convertDateTimeToHumanReadable(inputList, sort = true) {
    let cloneInputObj = structuredClone(inputList)
    if ((typeof inputList === "object") && (inputList !== null)) {
        if (sort) {
            cloneInputObj = sortObjectItemsWithOptions(cloneInputObj, 'updated_at', 'desc')
        }
        cloneInputObj.forEach((item) => {
            const dateObjectCreatedAt = new Date(item['created_at'])
            item['created_at'] = dateObjectCreatedAt.toLocaleDateString("ru-RU", {
                month: "long",
                day: "numeric",
                year: "numeric"
            })
            const dateObjectUpdatedAt = new Date(item['updated_at'])
            item['updated_at'] = dateObjectUpdatedAt.toLocaleDateString("ru-RU", {
                month: "long",
                day: "numeric",
                year: "numeric"
            })
        })
    } else {
        return null
    }

    return cloneInputObj
}