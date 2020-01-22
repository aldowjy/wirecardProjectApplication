import { all, takeEvery, call, put } from 'redux-saga/effects';
import { CALL_REQUEST, SET_LOGIN, SET_LOGOUT } from '../types';
import { callService } from '../../helpers/wRequest';
import { setLogin, setLogout } from '../actions/loginActions';
import { startRequest, doneRequest } from '../actions/requestActions';

export function* processRequestApi(actions) {
  console.log('call api called : ', actions);
  yield put(startRequest(actions.url));
  const response = yield call(callService, actions);
  console.log('what is response ? ', response);
  if (response) {
    yield put(setLogin());
  }
  yield put(doneRequest(actions.url));
}

export function* processRequestLogin(actions) {
  console.log('is going to login : ', actions);
}

export function* processRequestLogout(actions) {
  console.log('is going to logout : ', actions);
}

const sagas = [
  takeEvery(CALL_REQUEST, processRequestApi),
  takeEvery(SET_LOGIN, processRequestLogin),
  takeEvery(SET_LOGOUT, processRequestLogout),
];

export default function* rootSaga() {
  yield all([...sagas]);
}
