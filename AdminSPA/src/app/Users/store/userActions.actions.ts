import { User } from 'src/app/Interfaces/User';
import { Action } from '@ngrx/store';
import { Message } from 'src/app/Interfaces/Message';

export const ADD_MSG_START = 'ADD_MSG_START';
export const ADD_MSG_SUCCESS = 'ADD_MSG_SUCCESS';

export const GET_MSG_START = 'GET_MSG_START';
export const GET_MSG_SUCCESS = 'GET_MSG_SUCCESS';

export const APPROVE_MSG_START = 'APPROVE_MSG_START';
export const APPROVE_MSG_SUCCESS = 'APPROVE_MSG_SUCCESS';


export class GetMsgStart implements Action {
  readonly type = GET_MSG_START;
}

export class GetMsgSuccess implements Action {
  readonly type = GET_MSG_SUCCESS;
  constructor(public payload:Message[]) {}
}

export class AddMsgStart implements Action {
    readonly type = ADD_MSG_START;

    constructor(public payload:{userId:number,msg:Message}) {}
}
export class AddMsgSuccess implements Action {
    readonly type = ADD_MSG_SUCCESS;

    constructor(public payload:Message) {}
}
export class ApproveMsgStart implements Action {
  readonly type = APPROVE_MSG_START;
  constructor(public payload:{message:Message,id:number}){}
}

export class ApproveMsgSuccess implements Action {
  readonly type = APPROVE_MSG_SUCCESS;
  constructor(public payload:Message){}
}

export type UserActionsTypes =
  | GetMsgStart
  | GetMsgSuccess
  | AddMsgStart
  | AddMsgSuccess
  | ApproveMsgStart 
  | ApproveMsgSuccess;
