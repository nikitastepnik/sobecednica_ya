const _ = require('lodash');

export function sortObjectItemsWithOptions(inputList, sort_field, sort_order) {
    if (typeof inputList === "object") {
        inputList = _.orderBy(inputList, [sort_field], [sort_order])
    }
    return inputList
}