import {onInputFormFieldListener, onInvalidValidateFunction} from "./formAddValidationInputFields";

export function removeListenersInputFields(inputField, researchId, researchSchema) {
    if (researchId) {
        inputField.removeEventListener('input', function (event) {
            onInputFormFieldListener(event, researchId, researchSchema)
        })
    }

    inputField.removeEventListener('invalid', onInvalidValidateFunction)
}
