import {matchEnglishTypesWithRussianTypes} from "../../constants/formValidationData";

export function getInputTypeOnRussianLanguage(inputField) {
    const inputType = inputField.type

    let inputTypeOnRussian = matchEnglishTypesWithRussianTypes[inputType]

    if (inputTypeOnRussian === undefined) {
        inputTypeOnRussian = "Другой"
    }

    return inputTypeOnRussian
}

export function onInvalidValidateFunction(event) {
    if (event.target.validity.valueMissing) {
        event.target.setCustomValidity('Пожалуйста, заполните это поле')
        if (event.target.type === "number") {
            event.target.setCustomValidity('Пожалуйста, заполните или проверьте это поле, допустимы только цифры и минус')
        }
    } else if (event.target.validity.typeMismatch) {
        event.target.setCustomValidity('Значение неверного типа! Ожидается: ' +
            getInputTypeOnRussianLanguage(event.target.type) + ' тип')
    } else if (event.target.validity.rangeOverflow) {
        event.target.setCustomValidity('Значение должно быть меньше или равно: ' +
            event.target.max)
    } else if (event.target.validity.rangeUnderflow) {
        event.target.setCustomValidity('Значение должно быть больше или равно: ' +
            event.target.min)
    } else if (event.target.validity.patternMismatch) {
        event.target.setCustomValidity('Значение не соответствует шаблону: ' +
            event.target.pattern)
    } else if (event.target.validity.tooLong) {
        event.target.setCustomValidity('Значение превышает предельную длину: ' +
            event.target.maxlength)
    } else if (event.target.validity.tooShort) {
        event.target.setCustomValidity('Значение меньше минимальной длины: ' +
            event.target.minlength)
    } else if (event.target.validity.stepMismatch) {
        event.target.setCustomValidity('Значение не соответствует шагу изменения: ' +
            event.target.step)
    } else if (event.target.validity.badInput) {
        event.target.setCustomValidity('Значение не может быть приведено к значению. Попробуйте вновь!')
    } else if (event.target.validity.customError) {
        event.target.setCustomValidity('')
    }
}

export function onInputFormFieldListener(event, researchId, researchSchema) {
    event.target.setCustomValidity('')
    let targetId = event.target.name.replace('root_', '')

    if (Object.keys(researchSchema.properties).includes(targetId)) {
        let savedFields = JSON.parse(window.sessionStorage.getItem("research" + researchId))
        savedFields[targetId] = event.target.value
        window.sessionStorage.setItem("research" + researchId, JSON.stringify(savedFields));
    }
}


export function validateForm(inputField, researchId, researchSchema) {
    if (researchId) {
        inputField.addEventListener('input', function (event) {
            onInputFormFieldListener(event, researchId, researchSchema)
        })
    }

    inputField.addEventListener('invalid', onInvalidValidateFunction)
}

