import {createStore, combineReducers, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';
import initState from './states';
import { loginReducers } from './reducers/loginReducer';
import { requestReducers } from './reducers/requestReducer';
import { validationReducers } from './reducers/validationReducer';
import { accountListReducers } from './reducers/accountListReducer';
import { accountReducers } from './reducers/accountReducer';
import logger from 'redux-logger';

const sagaMiddleware = createSagaMiddleware();

const appRedux = combineReducers({
  loginState: loginReducers,
  requestState: requestReducers,
  validationState: validationReducers,
  accountListState: accountListReducers,
  accountState: accountReducers
});

function configureStore(initialState = initState) {
  const store = createStore(
    appRedux,
    initialState,
    applyMiddleware(sagaMiddleware),
  );
  sagaMiddleware.run(rootSaga);
  return store;
}

const store = configureStore(initState);
export default store;
