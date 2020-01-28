import { VALIDATION_INPUT } from '../types';

export function validate(fieldName, value) {
  return {
    type: VALIDATION_INPUT,
    fieldName,
    value,
  };
}
