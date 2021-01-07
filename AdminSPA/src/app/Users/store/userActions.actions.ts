import { User } from 'src/app/Interfaces/User';
import {Action} from '@ngrx/store';

export const ADD_USER = 'ADD_USER';
export const GET_USERS = 'GET_USERS';
export const DELETE_USER = 'DELETE_USER';
export const UPDATE_USER = 'UPDATE_USER';

export class AddUser implements Action {
    readonly type = ADD_USER;

    constructor(public payload:User) {}
}


export class GetUsers implements Action {
    readonly type = GET_USERS;

    constructor(public payload:User[]) {}
}

export class DeleteUser implements Action {
    readonly type = DELETE_USER;
    constructor(public payload:number) {}
}
export class UpdateUser implements Action {
    readonly type = UPDATE_USER;

    constructor(public payload:{index:number, user:User}) {}
}

export type UserActionsTypes = AddUser  | GetUsers | DeleteUser | UpdateUser;