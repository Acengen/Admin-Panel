import { Message } from 'src/app/Interfaces/Message';
import { User } from '../../Interfaces/User';
import * as fromActions from '../../Users/store/userActions.actions';

export interface State {
  user: User[];
  msg:Message[];
  successMessage:boolean;
}

const initialState: State = {
  user: [],
  msg: [],
  successMessage:false
};

export function UserReducer(
  state = initialState,
  action: fromActions.UserActionsTypes
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
      };
    case fromActions.ADD_USER_SUCCESS:
      return {
        ...state,
        user: [...state.user, action.payload],
      };
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
    case fromActions.ADD_MSG_START:
      return {
        ...state,
        successMessage:false
      }
    case fromActions.ADD_MSG_SUCCESS:
     
      return {
        ...state,
        msg:[...state.msg,action.payload],
        successMessage:true
      }
    default:
      return state;
  }
}

export const getUsers = (state: State) => state.user;
export const getIsSuccess = (state:State) => state.successMessage;