import { User } from 'src/app/Interfaces/User';
import { Action } from '@ngrx/store';
import { Message } from 'src/app/Interfaces/Message';

export const ADD_USER = 'ADD_USER';
export const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS';
export const GET_USERS_START = 'GET_USERS_START';
export const GET_USERS = 'GET_USERS';
export const DELETE_SINGLE_USER = 'DELETE_SINGLE_USER';
export const DELETE_SINGLE_USER_SUCCESS = 'DELETE_SINGLE_USER_SUCCESS';
export const DELETE_USER = 'DELETE_USER';
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';
export const UPDATE_USER_START = 'UPDATE_USER_START';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const GET_USERS_GENDER = 'GET_USERS_GENDER';
export const GET_USERS_GENDER_START = 'GET_USERS_GENDER_START';
export const ADD_MSG_START = 'ADD_MSG_START';
export const ADD_MSG_SUCCESS = 'ADD_MSG_SUCCESS';

export class AddUser implements Action {
  readonly type = ADD_USER;

  constructor(public payload: { user: User; productName: string }) {}
}

export class AddUserSuccess implements Action {
  readonly type = ADD_USER_SUCCESS;

  constructor(public payload: User) {}
}

export class GetUsersStart implements Action {
  readonly type = GET_USERS_START;
}

export class GetUsers implements Action {
  readonly type = GET_USERS;

  constructor(public payload: User[]) {}
}

export class GetUsersGender implements Action {
  readonly type = GET_USERS_GENDER;

  constructor(public payload: { gender: string }) {}
}

export class DeleteSingleUser implements Action {
  readonly type = DELETE_SINGLE_USER;
  constructor(public payload:number) {}
}

export class DeleteSingleUserSuccess implements Action {
  readonly type = DELETE_SINGLE_USER_SUCCESS;
  constructor(public payload:User) {}
}

export class DeleteUser implements Action {
  readonly type = DELETE_USER;
  constructor(public payload: { index: number; id?: number }) {}
}

export class DeleteUserSuccess implements Action {
  readonly type = DELETE_USER_SUCCESS;

  constructor(public payload: User) {}
}

export class UpdateUserStart implements Action {
  readonly type = UPDATE_USER_START;

  constructor(public payload: { user: User; id: number }) {}
}
export class UpdateUserSuccess implements Action {
  readonly type = UPDATE_USER_SUCCESS;

  constructor(public payload: User) {}
}

export class AddMsgStart implements Action {
    readonly type = ADD_MSG_START;

    constructor(public payload:{userId:number,msg:Message}) {}
}
export class AddMsgSuccess implements Action {
    readonly type = ADD_MSG_SUCCESS;

    constructor(public payload:Message) {}
}

export type UserActionsTypes =
  | AddUser
  | AddUserSuccess
  | GetUsers
  | DeleteSingleUser
  | DeleteSingleUserSuccess
  | DeleteUser
  | UpdateUserSuccess
  | GetUsersStart
  | UpdateUserStart
  | GetUsersGender
  | DeleteUserSuccess
  | AddMsgStart
  | AddMsgSuccess;
