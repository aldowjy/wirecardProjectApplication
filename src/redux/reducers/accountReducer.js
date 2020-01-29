
import accountState from '../states/accountState';
import { GET_ACCOUNT } from '../types';

export function accountReducers(state = accountState, action) {
    switch(action.type){
        case GET_ACCOUNT : {
            console.log(state);
            console.log(action);
            return {...state}
        }
        default : {
            return state;
        }
    }
}