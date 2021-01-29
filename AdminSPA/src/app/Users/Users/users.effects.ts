import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { switchMap, map, tap, catchError } from "rxjs/operators";
import { User } from "src/app/Interfaces/User";
import { UserServiceService } from "src/app/Service/UserService.service";
import * as fromActions from '../Users/user.actions';

@Injectable()
export class UsersHttp {
  @Effect()
  usersGet = this.actions$.pipe(
    ofType(fromActions.GET_USERS_START),
    switchMap((resdata:fromActions.GetUsersStart) => {
     
      return this.http.get<User[]>('http://localhost:5000/api/user').pipe(
        map((users) => {
        
          return new fromActions.GetUsers(users);
        })
      );
    })
  );
  @Effect()
  updateUser = this.actions$.pipe(
    ofType(fromActions.UPDATE_USER_START),
    switchMap((resdata: fromActions.UpdateUserStart) => {
      return this.http
        .put<User>(
          'http://localhost:5000/api/user/edit/' + resdata.payload.id,
          resdata.payload.user
        )
        .pipe(
          map((users: any) => {
            return new fromActions.UpdateUserSuccess(users);
          })
        );
    })
  );
  @Effect()
  usersGetByGender = this.actions$.pipe(
    ofType(fromActions.GET_USERS_GENDER),
    switchMap((resData: fromActions.GetUsersGender) => {
      let params = new HttpParams();
      if (resData.payload.gender !== null) {
        params = params.append('gender', resData.payload.gender);
      }
      return this.http
        .get<any>('http://localhost:5000/api/user', { params: params })
        .pipe(
          map((users) => {
            return new fromActions.GetUsers(users);
          })
        );
    })
  );


  @Effect()
  userName = this.actions$.pipe(
    ofType(fromActions.GET_USERS_NAME),
    switchMap((resData: fromActions.GetUsersName) => {
      let params = new HttpParams();
      if (resData.payload.name !== null) {
        params = params.append('name', resData.payload.name);
      }
      return this.http
        .get<any>('http://localhost:5000/api/user', { params: params })
        .pipe(
          map((users) => {
            return new fromActions.GetUsers(users);
          })
        );
    })
  );


  @Effect()
  userDelete = this.actions$.pipe(
    ofType(fromActions.DELETE_USER),
    switchMap((resData: fromActions.DeleteUser) => {
      return this.http
        .delete<User>('http://localhost:5000/api/user/' + resData.payload.id)
        .pipe(
          map((users) => {
            return new fromActions.DeleteUserSuccess(users);
          })
        );
    })
  );
  @Effect()
  singleUserDelete = this.actions$.pipe(
    ofType(fromActions.DELETE_SINGLE_USER),
    switchMap((resData: fromActions.DeleteSingleUser) => {
      return this.http
        .delete<User>('http://localhost:5000/api/user/' + resData.payload)
        .pipe(
          map((users) => {
            
            return new fromActions.DeleteSingleUserSuccess(users);
          })
        );
    })
  );
  @Effect()
  addUser = this.actions$.pipe(
    ofType(fromActions.ADD_USER),
    switchMap((resData: fromActions.AddUser) => {
      return this.http
        .post<any>(
          'http://localhost:5000/api/user/add/' + resData.payload.productName,
          resData.payload.user
        )
        .pipe(
          map((res) => {
            return new fromActions.AddUserSuccess(res);
          }),catchError(error => {
            return of(new fromActions.AddUserFail(error))
          })
        );
    })
  );
  
  @Effect({dispatch:false})
  successfulUserAdded = this.actions$.pipe(
    ofType(fromActions.ADD_USER_SUCCESS),
    tap(()=>{
      this.route.navigate(['/users'])
   })
  )

  @Effect({dispatch:false})
  singleUserDeleted = this.actions$.pipe(
    ofType(fromActions.DELETE_SINGLE_USER_SUCCESS),
    tap(() => {
        this.route.navigate(['/'])
    })
  )
  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private service: UserServiceService,
    private route:Router
  ) {}

}