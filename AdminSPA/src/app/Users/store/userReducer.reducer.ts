import { Message } from 'src/app/Interfaces/Message';
import { User } from '../../Interfaces/User';
import * as fromActions from '../../Users/store/userActions.actions';

export interface State {
  msg:Message[];
  successMessage:boolean;
  errorMsg:string;
}

const initialState: State = {
  msg: [],
  successMessage:false,
  errorMsg:null
};

export function UserReducer(
  state = initialState,
  action: fromActions.UserActionsTypes
) {
  switch (action.type) {
    case fromActions.GET_MSG_START:
      return {
        ...state
      }
    case fromActions.GET_MSG_SUCCESS:
      return {
        ...state,
        msg:action.payload
      }
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
    case fromActions.APPROVE_MSG_START:
      return {
        ...state
      }
    case fromActions.APPROVE_MSG_SUCCESS:
      let msgindex = state.msg.findIndex(
        (item) => item.id == action.payload.id
      );

      let msgState = [...state.msg];
      let msgUpdate = {
        ...action.payload
      };

      msgState[msgindex] = msgUpdate;

      return {
        ...state,
        msg:msgState
      }
    default:
      return state;
  }
}

export const getIsSuccess = (state:State) => state.successMessage;
export const getMsgs = (state:State) => state.msg;