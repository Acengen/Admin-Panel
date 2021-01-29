import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/Service/UserService.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import * as fromActions from './userActions.actions';
import { Message } from 'src/app/Interfaces/Message';

@Injectable()
export class UserEffects { 
  @Effect()
  getMsg = this.actions$.pipe(
    ofType(fromActions.GET_MSG_START),
    switchMap(() => {
        return this.http.get<Message[]>("http://localhost:5000/api/user/messages").pipe(
          map((res) => {
            return new fromActions.GetMsgSuccess(res)
          })
        )
    })
  )

  @Effect()
  addMsg = this.actions$.pipe(
    ofType(fromActions.ADD_MSG_START),
    switchMap((resData:fromActions.AddMsgStart) => {
      return this.service.sendMsg(resData.payload.userId,resData.payload.msg).pipe(
        map((res) => {
          
          return new fromActions.AddMsgSuccess(res)
        })
      )
    })
  )

  @Effect()
  approveMsg = this.actions$.pipe(
    ofType(fromActions.APPROVE_MSG_START),
    switchMap((resData:fromActions.ApproveMsgStart) => {
      return this.http.put<Message>("http://localhost:5000/api/user/approveMsg/" + resData.payload.id,resData.payload.message).pipe(
        map((res) => {
          return new fromActions.ApproveMsgSuccess(res)
        })
      )
    })
  )
  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private service: UserServiceService,
    private route:Router
  ) {}
}
