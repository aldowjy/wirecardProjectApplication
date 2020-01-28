import { all, takeEvery, takeLatest, call, put, delay } from 'redux-saga/effects';
import { CALL_REQUEST, SET_LOGIN, SET_LOGOUT, FETCH_ACCOUNT_LIST, LOAD_MORE_ACCOUNT } from '../types';
import { callService, getAccountList, loadMoreAccountList } from '../../helpers/wRequest';
import { setLogin, setLogout } from '../actions/loginActions';
import { startRequest, doneRequest } from '../actions/requestActions';
import { loadAccountListSucceed, loadAccountListFailed, loadMoreAccountSucceed, loadMoreAccountFailed } from '../actions/accountListAction';

export function* processRequestApi(actions) {
  console.log('call api called : ', actions.payloads.url);
  yield put(startRequest(actions.payloads.url));
  const response = yield call(callService, actions.payloads);
  console.log('what is response ? ', response);
  if (response) {
    yield put(setLogin());
  }
  yield put(doneRequest(actions.payloads.url));
}

export function* processRequestLogin(actions) {
  console.log('is going to login : ', actions);
}

export function* processRequestLogout(actions) {
  console.log('is going to logout : ', actions);
}

export function* fetchAccountListSaga() {
  try {
    const response = yield call(getAccountList);
    yield put(loadAccountListSucceed(response));
  } catch (error) {
    yield put(loadAccountListFailed(error.message));
  }
}

export function* loadMoreAccountListSaga(action) {
  const { payload } = action;
  try {
    const response = yield call(loadMoreAccountList, payload);
    yield delay(500);
    yield put(loadMoreAccountSucceed(response));
  } catch (error) {
    yield put(loadMoreAccountFailed(error.message));
  }
}

const sagas = [
  takeEvery(CALL_REQUEST, processRequestApi),
  takeEvery(SET_LOGIN, processRequestLogin),
  takeEvery(SET_LOGOUT, processRequestLogout),
  takeLatest(FETCH_ACCOUNT_LIST, fetchAccountListSaga),
  takeEvery(LOAD_MORE_ACCOUNT, loadMoreAccountListSaga)
];

export default function* rootSaga() {
  yield all([...sagas]);
}
