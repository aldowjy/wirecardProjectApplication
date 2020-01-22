
import loginState from '../states'
import { SET_LOGIN, SET_LOGOUT } from '../types';

function getCurrentDate(){
    return new Date();
}

export function loginReducers(state = loginState, action) {
    switch(action.type){
        case SET_LOGIN : {
            return {...state, loginStatus: true}
        }
        case SET_LOGOUT : {
            return {...state, loginStatus: false, lastLogin: getCurrentDate()}
        }
        default : {
            return state;
        }
    }
}