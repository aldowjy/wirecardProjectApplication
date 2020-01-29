import { GET_ACCOUNT } from '../types';

export function validate(params) {
  return {
    type: GET_ACCOUNT,
    params
  };
}
