import userState from './userState';
import ActionType from './globalActionType';

const dataReducer = (state = userState, action) => {
    switch (action.type) {
        case ActionType.CHANGE_COMPANY_ID:
            const company = state.company;
            const coba = {
                ...company,
                companyId : action.text
            }
            return {...state, company : coba}
        case ActionType.CHANGE_USER_ID:
            return {...state, userId : action.text}
        case ActionType.CHANGE_PASSWORD:
            return {...state, password : action.text}
        case ActionType.CLEAR_LOGIN_INPUT:
            const test = {
                ...company,
                companyId : ''
            }
            return {...state, company : test, userId : '', password : ''}
        default:
            return state
    }
}

export default dataReducer