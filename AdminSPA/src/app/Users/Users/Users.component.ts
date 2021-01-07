import { UserServiceService } from './../../Service/UserService.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from 'src/app/Interfaces/User';
import { Product } from 'src/app/Interfaces/Product';
import { Subscription, Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromReducer from '../store/userReducer.reducer';
import { map } from 'rxjs/operators';
import * as fromActions from '../store/userActions.actions';


@Component({
  selector: 'app-Users',
  templateUrl: './Users.component.html',
  styleUrls: ['./Users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {
  users:User[];
  products:Product[] = [];
  listView = false;
  genders = [{name:"male"},{name:"female"}];
  defaultgender = "male";
  usersSub:Subscription;
  constructor(private service:UserServiceService,private store:Store<fromReducer.AppState>) { }

  ngOnInit() {
    this.service.getUserHttp().subscribe(
      res => {
       this.usersSub = this.store.select('userList').pipe(map(stateData => stateData.user)).subscribe(user => {
          this.users = user
        })
      }
    )
   
   
  }

 
  loadUsersByGender(f:NgForm) {
    this.service.getUserHttp(f.value).subscribe(
      res => {
        this.store.dispatch(new fromActions.GetUsers(res))
      }
    )
  }
  

  ngOnDestroy() {
    this.usersSub.unsubscribe()
  }
  

}
