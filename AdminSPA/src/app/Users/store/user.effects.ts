import { UserServiceService } from 'src/app/Service/UserService.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from "@ngrx/effects";
import { map, switchMap } from "rxjs/operators";
import { User } from "src/app/Interfaces/User";
import * as fromActions from './userActions.actions'

@Injectable()
export class UserEffects {
    @Effect()
    usersGet = this.actions$.pipe(
        ofType(fromActions.GET_USERS_START),
        switchMap(() => {
            let params = new HttpParams();
            return this.http.get<any>("http://localhost:5000/api/user", {params:params}).pipe(
                map(users => {
                    return new fromActions.GetUsers(users)
                })
            )
        })
    )
    @Effect()
    updateUser = this.actions$.pipe(
        ofType(fromActions.UPDATE_USER_START),
        switchMap((resdata:fromActions.UpdateUserStart) => {
            return this.http.put<User>("http://localhost:5000/api/user/edit/" + resdata.payload.id, {
                name:resdata.payload.name,
                street:resdata.payload.street,
                city:resdata.payload.city,
                gender:resdata.payload.gender
            }).pipe(
                map(users => {
                    return new fromActions.UpdateUserSuccess({user:users})
                })
            )
        })
    )
    @Effect()
    usersGetByGender = this.actions$.pipe(
        ofType(fromActions.GET_USERS_GENDER),
        switchMap((resData:fromActions.GetUsersGender) => {
            let params = new HttpParams();
            if(resData.payload.gender !== null) {
                params = params.append('gender',resData.payload.gender)
            }
            return this.http.get<any>("http://localhost:5000/api/user", {params:params}).pipe(
                map(users => {
                    return new fromActions.GetUsers(users)
                })
            )
        })
    )

    constructor(private actions$:Actions,private http:HttpClient,private service:UserServiceService){}
}