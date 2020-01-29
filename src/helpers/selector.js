import { createSelector } from 'reselect';
import { initState } from '../redux/states';

const getUser = (state = initState) => state.loginState

export const makeSelectAccountUser = createSelector(getUser, (substate) => substate.getIn(['accountUser']).toJS())