import requestState from '../states/requestState';
import { START_REQUEST, DONE_REQUEST } from '../types';

export function requestReducers(state = requestState, actions) {
  switch (actions.type) {
    case START_REQUEST: {
      return {...state, requestStatus: true, requestUrl: actions.url};
    }
    case DONE_REQUEST: {
      return {...state, requestStatus: false, requestUrl: null};
    }
    default: {
      return state;
    }
  }
}
