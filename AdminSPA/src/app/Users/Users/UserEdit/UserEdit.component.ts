import { Store } from '@ngrx/store';
import { User } from 'src/app/Interfaces/User';
import { UserServiceService } from 'src/app/Service/UserService.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Data, Params } from '@angular/router';
import { NgForm } from '@angular/forms';
import * as fromRoot from '../../../app.reducer'
import * as fromActions from '../../store/userActions.actions'
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
  constructor(private route:ActivatedRoute,private service: UserServiceService,private store:Store<fromRoot.AppState>) { }

  ngOnInit() {
    this.route.params.subscribe(
      (param:Params) => {
        this.userId = +param['id']
        this.userSb = this.store.select('userList').pipe(map(resdataState => {
           return resdataState.user.find((v,index) => {
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
