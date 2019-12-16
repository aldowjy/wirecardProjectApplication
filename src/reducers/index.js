import { combineReducers } from 'redux';
import userData from './userReducer';

export default combineReducers({
    userState: userData
})
