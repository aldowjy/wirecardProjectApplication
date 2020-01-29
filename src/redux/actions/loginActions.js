import { SET_LOGIN, SET_LOGOUT } from '../types';

export function setLogin(payload){
    return {
        type:SET_LOGIN,
        payload
    };
}

export function setLogout(){
    return {
        type: SET_LOGOUT
    };
}

