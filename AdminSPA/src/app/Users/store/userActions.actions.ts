import { User } from 'src/app/Interfaces/User';
import {Action} from '@ngrx/store';

export const ADD_USER = 'ADD_USER';
export const GET_USERS_START = 'GET_USERS_START'
export const GET_USERS = 'GET_USERS';
export const DELETE_USER = 'DELETE_USER';
export const UPDATE_USER_START = 'UPDATE_USER_START';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const GET_USERS_GENDER = 'GET_USERS_GENDER';
export const GET_USERS_GENDER_START = 'GET_USERS_GENDER_START'

export class AddUser implements Action {
    readonly type = ADD_USER;

    constructor(public payload:User) {}
}

export class GetUsersStart implements Action {
    readonly type = GET_USERS_START;

    
}

export class GetUsers implements Action {
    readonly type = GET_USERS;

    constructor(public payload:User[]) {}
}

export class GetUsersGender implements Action {
    readonly type = GET_USERS_GENDER;

    constructor(public payload:{gender:string}) {}
}

export class DeleteUser implements Action {
    readonly type = DELETE_USER;
    constructor(public payload:number) {}
}
export class UpdateUserStart implements Action {
    readonly type = UPDATE_USER_START;
    
    constructor(public payload:{id:number,name:string,street:string,city:string,gender:string}) {}
}
export class UpdateUserSuccess implements Action {
    readonly type = UPDATE_USER_SUCCESS;

    constructor(public payload:{user:User}) {}
}

export type UserActionsTypes = AddUser  | GetUsers | DeleteUser | UpdateUserSuccess | GetUsersStart | UpdateUserStart | GetUsersGender;


