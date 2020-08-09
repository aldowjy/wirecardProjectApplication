
import loginState from '../states/loginState';
import { SET_LOGIN, SET_LOGOUT } from '../types';
import { fromJS } from "immutable"

function getCurrentDate(){
    return new Date();
}

export function loginReducers(state = loginState, action) {
    switch(action.type){
        case SET_LOGIN : {
            console.log(state)
            return state
            .setIn(['accountUser'], fromJS(action.payload))
            .setIn(['loginStatus'], true)
        }
        case SET_LOGOUT : {
            return {...state, loginStatus: false}
        }
        default : {
            return state;
        }
    }
}