import {
    FETCH_ACCOUNT_LIST,
    FETCH_ACCOUNT_LIST_SUCCESS,
    FETCH_ACCOUNT_LIST_FAILURE,
    LOAD_MORE_ACCOUNT,
    LOAD_MORE_ACCOUNT_SUCCEED,
    LOAD_MORE_ACCOUNT_FAILED
 } from '../types';

export function loadAccountList() {
    return { type: FETCH_ACCOUNT_LIST };
  }
  
  export function loadAccountListSucceed(payload) {
    return { type: FETCH_ACCOUNT_LIST_SUCCESS, payload };
  }
  
  export function loadAccountListFailed(payload) {
    return { type: FETCH_ACCOUNT_LIST_FAILURE, payload };
  }
  
  export function loadMoreAccount(payload) {
    return { type: LOAD_MORE_ACCOUNT, payload };
  }
  
  export function loadMoreAccountSucceed(payload) {
    return { type: LOAD_MORE_ACCOUNT_SUCCEED, payload };
  }
  
  export function loadMoreAccountFailed(payload) {
    return { type: LOAD_MORE_ACCOUNT_FAILED, payload };
  }