import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromReducer from './Users/store/userReducer.reducer';


export interface AppState {
    userList: fromReducer.State
}

export const appreducers: ActionReducerMap<AppState> = {
    userList: fromReducer.UserReducer
}


export const usersState = createFeatureSelector<fromReducer.State>('userList');
export const getUsers = createSelector(usersState,fromReducer.getUsers);
export const getIsSuccess = createSelector(usersState,fromReducer.getIsSuccess);
export const getMessages = createSelector(usersState,fromReducer.getMsgs);