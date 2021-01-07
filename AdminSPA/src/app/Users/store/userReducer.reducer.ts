
import { User } from "../../Interfaces/User";
import * as fromActions from '../../Users/store/userActions.actions';

export interface State {
    user:User[]
}

export interface AppState {
    userList: State
}

const initialState:State = {
    user: []
}

export function UserReducer(state=initialState, action:fromActions.UserActionsTypes){
    switch(action.type) {
        case fromActions.GET_USERS:
            return {
                user: [...action.payload]
            }
        case fromActions.ADD_USER:
            return {
                ...state,
                user: [...state.user,action.payload]
            }
        case fromActions.DELETE_USER:
           return {
               user: state.user.filter((user,index) => {
                   return index !== action.payload
               })
           }
        case fromActions.UPDATE_USER:
           let itemIndex = state.user.findIndex(item => item.id == action.payload.index);
           let usersarray = [...state.user];
           let userUpdate = {
               ...action.payload.user
           }
           usersarray[itemIndex] = userUpdate
            return {
                ...state,
                user: usersarray
            }
        default:
            return state
    }
}