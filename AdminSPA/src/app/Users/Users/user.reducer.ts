import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromActions from '../Users/user.actions';
import * as fromRoot from '../../app.reducer';
import { User } from 'src/app/Interfaces/User';

export interface State extends fromRoot.AppState {
  user:User[]
}

const initialState = {
  user:[]
}

export function UsersReducer(
    state = initialState,
    action: fromActions.UserType
  ) {
    switch (action.type) {
      case fromActions.GET_USERS_START:
        return {
          ...state,
        };
      case fromActions.GET_USERS:
        return {
          ...state,
          user: action.payload,
        };
      case fromActions.ADD_USER:
        return {
          ...state,
          errorMsg:null
        };
      case fromActions.ADD_USER_SUCCESS:
        return {
          ...state,
          user: [...state.user, action.payload],
          errorMsg:null
        };
      case fromActions.ADD_USER_FAIL:
        return {
          ...state,
          errorMsg:action.payload
        }
      case fromActions.DELETE_SINGLE_USER:
        let user = state.user.find(v => v.id === action.payload)
        return {
          ...state,
          user: state.user.filter((v,index) => {
            return v !== user
          })
        }
      case fromActions.DELETE_SINGLE_USER_SUCCESS:
        return {
          ...state
        }
      case fromActions.DELETE_USER:
        return {
          ...state,
          user:state.user.filter((v,index) => {
            return index !== action.payload.index
          })
        }
      case fromActions.DELETE_USER_SUCCESS:
        return {
          ...state,
        };
      case fromActions.UPDATE_USER_START:
        return {
          ...state,
        };
      case fromActions.UPDATE_USER_SUCCESS:
        let itemIndex = state.user.findIndex(
          (item) => item.id == action.payload.id
        );
        let usersarray = [...state.user];
        let userUpdate = {
          ...action.payload,
        };
        usersarray[itemIndex] = userUpdate;
  
        return {
          ...state,
          user: usersarray,
        };
      case fromActions.GET_USERS_GENDER:
        let newState = state.user.filter((v) => {
          return v.gender === action.payload.gender;
        });
        return {
          ...state,
          user: newState,
        };
      case fromActions.GET_USERS_NAME:
        let nameState = state.user.filter(v => {
          return v.name.includes(action.payload.name)
        });
        return {
          ...state,
          user:nameState
        }
    }

   
}

export const getUserState = createFeatureSelector<State>('user');
export const getUsers = createSelector(getUserState,(state:State) => state.user);