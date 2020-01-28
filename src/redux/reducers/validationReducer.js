import validationState from '../states/validationState';
import { VALIDATION_INPUT } from '../types';
import validati from 'validate.js';
import { validation } from '../../helpers/validation';

export function validationReducers(state = validationState, actions) {
  switch (actions.type) {
    case VALIDATION_INPUT: {
      var formValues = {}
      formValues[actions.fieldName] = actions.value
      console.log("Form Values: ", formValues[actions.fieldName])

      var formFields = {}
      formFields[actions.fieldName] = validation[actions.fieldName]
      console.log("Form Fields: ", formFields[actions.fieldName])

      console.log("Values: ", formValues)
      console.log("Fields: ", formFields)

      try {
        const result = validati(formValues, formFields)
        console.log("Result: ", result)
        if (result) {
          return {...state, messageError: result[actions.fieldName][0]};
        }
        return {...state, messageError: null};
      } catch (error) {
        console.log("FAK", error.message)
      }
    }
    default: {
      return state;
    }
  }
}
