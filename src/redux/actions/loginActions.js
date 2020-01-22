import { SET_LOGIN, SET_LOGOUT } from '../types';

export function setLogin(){
    return {
        type:SET_LOGIN
    };
}

export function setLogout(){
    return {
        type: SET_LOGOUT
    };
}

