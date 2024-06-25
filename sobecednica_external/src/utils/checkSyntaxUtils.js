import {WHITESPACES_EXISTS_PATTERN} from "../constants/constRegexpPatterns";

export function hasWhitespaces(inputString) {
    if (!inputString) {
        return
    }
    return WHITESPACES_EXISTS_PATTERN.test(inputString)
}