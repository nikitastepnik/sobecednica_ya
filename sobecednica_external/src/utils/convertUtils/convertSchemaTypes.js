const BOOLEAN_TYPE = 'Булево значение'
const ENUM_TYPE = 'Перечисление'
const STRING_TYPE = 'Строка'
const NUMBER_TYPE = 'Десятичное число'
const INTEGER_TYPE = 'Целое число'

export function convertSchemaTypesToHumanReadable(researchProperty) {
    if (researchProperty.enum) {
        return ENUM_TYPE
    } else if (researchProperty.type === 'string') {
        return STRING_TYPE
    } else if (researchProperty.type === "boolean") {
        return BOOLEAN_TYPE
    } else if (researchProperty.type === "number") {
        return NUMBER_TYPE
    } else if (researchProperty.type === "integer") {
        return INTEGER_TYPE
    }

    return null
}