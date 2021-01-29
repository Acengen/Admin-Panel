import { Store } from '@ngrx/store';
import { User } from 'src/app/Interfaces/User';
import { UserServiceService } from 'src/app/Service/UserService.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Data, Params } from '@angular/router';
import { NgForm } from '@angular/forms';
import * as fromUserReducer from '../user.reducer'
import * as fromActions from '../../Users/user.actions'
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-UserEdit',
  templateUrl: './UserEdit.component.html',
  styleUrls: ['./UserEdit.component.scss']
})
export class UserEditComponent implements OnInit,OnDestroy {
  userId:number;
  user:User;
  errorMsg:string;
  gender:string[] = ['male','female'];
  defaultGender:string = "male";
  userSb:Subscription;
  constructor(private route:ActivatedRoute,private service: UserServiceService,private store:Store<fromUserReducer.State>) { }

  ngOnInit() {
    this.route.params.subscribe(
      (param:Params) => {
        this.userId = +param['id']
        this.userSb = this.store.select(fromUserReducer.getUsers).pipe(map(resdataState => {
           return resdataState.find((v,index) => {
             return v.id === this.userId
           })
         })).subscribe(
           (user:any) => {             
            this.user = JSON.parse(JSON.stringify(user))
           }
         )
      }
    )
  }

  UpdateUser(f:NgForm) {
    this.store.dispatch(new fromActions.UpdateUserStart({id:this.userId,user:f.value}))
  }

  ngOnDestroy() {
    this.userSb.unsubscribe()
  }

}
