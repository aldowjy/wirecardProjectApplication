import { DONE_REQUEST, START_REQUEST } from '../types';

export function startRequest(url) {
  return {
    type: START_REQUEST,
    url,
  };
}

export function doneRequest(url) {
  return {
    type: DONE_REQUEST,
    url,
  };
}
