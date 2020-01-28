import accountListState from '../states/accountListState';
import {
    FETCH_ACCOUNT_LIST,
    FETCH_ACCOUNT_LIST_SUCCESS,
    FETCH_ACCOUNT_LIST_FAILURE,
    LOAD_MORE_ACCOUNT,
    LOAD_MORE_ACCOUNT_SUCCEED,
    LOAD_MORE_ACCOUNT_FAILED
 } from '../types';

export function accountListReducers(state = accountListState, action) {
    switch (action.type) {
        case FETCH_ACCOUNT_LIST:
          return {
            ...state,
            isLoading: true,
          };
        case FETCH_ACCOUNT_LIST_SUCCESS:
          return {
            ...state,
            accountList: action.payload.data,
            totalPages: action.payload.total_pages,
            isLoading: false
          };
        case FETCH_ACCOUNT_LIST_FAILURE:
          return {
            ...state,
            error: action.payload,
            isLoading: false,
          };
        case LOAD_MORE_ACCOUNT:
          return {
            ...state,
            isLoading: true,
          };
        case LOAD_MORE_ACCOUNT_SUCCEED:
          const newAccountList = action.payload.data;
          const { accountList } = state;
          return {
            ...state,
            accountList: [...accountList, ...newAccountList],
            isLoading: false
          };
        case LOAD_MORE_ACCOUNT_FAILED:
          return {
            ...state,
            error: action.payload,
            isLoading: false,
          };
        default:
          return state;
      }
}