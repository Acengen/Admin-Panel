import { Action } from "@ngrx/store";
import { User } from "src/app/Interfaces/User";

export const ADD_USER = '[Users] ADD_USER';
export const ADD_USER_SUCCESS = '[Users] ADD_USER_SUCCESS';
export const ADD_USER_FAIL = '[Users] ADD_USER_FAIL';

export const GET_USERS_START = '[Users] GET_USERS_START';
export const GET_USERS = '[Users] GET_USERS';

export const DELETE_SINGLE_USER = '[Users] DELETE_SINGLE_USER';
export const DELETE_SINGLE_USER_SUCCESS = '[Users] DELETE_SINGLE_USER_SUCCESS';
export const DELETE_USER = '[Users] DELETE_USER';
export const DELETE_USER_SUCCESS = '[Users] DELETE_USER_SUCCESS';

export const UPDATE_USER_START = '[Users] UPDATE_USER_START';
export const UPDATE_USER_SUCCESS = '[Users] UPDATE_USER_SUCCESS';

export const GET_USERS_GENDER = '[Users] GET_USERS_GENDER';

export const GET_USERS_NAME = '[Users] GET_USERS_NAME';

export class AddUser implements Action {
    readonly type = ADD_USER;
  
    constructor(public payload: { user: User; productName: string }) {}
  }
  
  export class AddUserSuccess implements Action {
    readonly type = ADD_USER_SUCCESS;
  
    constructor(public payload: User) {}
  }
  
  export class AddUserFail implements Action {
    readonly type = ADD_USER_FAIL;
  
    constructor(public payload:string) {}
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
  
  export class GetUsersName implements Action {
    readonly type = GET_USERS_NAME;
    constructor(public payload: { name: string }) {}
  
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
  

  export type UserType = | AddUser
  | AddUserSuccess
  | AddUserFail
  | GetUsers
  | DeleteSingleUser
  | DeleteSingleUserSuccess
  | DeleteUser
  | UpdateUserSuccess
  | GetUsersStart
  | UpdateUserStart
  | GetUsersGender
  | GetUsersName
  | DeleteUserSuccess