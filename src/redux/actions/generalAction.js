import { CALL_REQUEST } from '../types';

export function callRequest(url, method, params, callbackSuccess, callbackError) {
  return {
    type: CALL_REQUEST,
    payloads: {
      url,
      method,
      params,
      callbackSuccess,
      callbackError
    },
  };
}
