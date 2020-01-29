import { all, takeEvery, takeLatest, call, put, delay } from 'redux-saga/effects';
import { CALL_REQUEST, SET_LOGIN, SET_LOGOUT, FETCH_ACCOUNT_LIST, LOAD_MORE_ACCOUNT, GET_ACCOUNT } from '../types';
import { callService, getAccountList, loadMoreAccountList, getAccountData } from '../../helpers/wRequest';
import { setLogin, setLogout } from '../actions/loginActions';
import { startRequest, doneRequest } from '../actions/requestActions';
import { loadAccountListSucceed, loadAccountListFailed, loadMoreAccountSucceed, loadMoreAccountFailed } from '../actions/accountListAction';
import { getAccount } from '../actions/accountAction';

export function* processRequestApi(actions) {
  console.log('call api called : ', actions);
  yield put(startRequest(actions.payloads.url));
  const response = yield call(callService, actions.payloads);
  console.log('What Response ? ', response);
  if(response){
    yield put(setLogin(response));
  }
  yield put(doneRequest(actions.payloads.url));
}

export function* processRequestLogin(actions) {
  console.log('Login Request: ', actions);
}

export function* processRequestLogout(actions) {
  console.log('Logout Request: ', actions);
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

export function* getAccountDataUser(action) {
  console.log('call api called : ', actions.payloads.url);
  yield put(startRequest(actions.payloads.url));
  const { params } = action;
  try {
    const response = yield call(getAccountData, params);
    yield delay(500);
    yield put(getAccount(response))
  } catch(error) {
      console.log(error.message);
  }
  yield put(doneRequest(actions.payloads.url));
}


// console.log('call api called : ', actions.payloads.url);
// yield put(startRequest(actions.payloads.url));
// const response = yield call(callService, actions.payloads);
// console.log('what is response ? ', response);
// if (response) {
//   yield put(setLogin());
// }
// yield put(doneRequest(actions.payloads.url));


const sagas = [
  takeEvery(CALL_REQUEST, processRequestApi),
  takeEvery(SET_LOGIN, processRequestLogin),
  takeEvery(SET_LOGOUT, processRequestLogout),
  takeLatest(FETCH_ACCOUNT_LIST, fetchAccountListSaga),
  takeEvery(LOAD_MORE_ACCOUNT, loadMoreAccountListSaga),
  takeEvery(GET_ACCOUNT, getAccountDataUser)
];

export default function* rootSaga() {
  yield all([...sagas]);
}
