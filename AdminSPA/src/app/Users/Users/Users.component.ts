import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from 'src/app/Interfaces/User';
import { Product } from 'src/app/Interfaces/Product';
import { Subscription, Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../app.reducer';
import { map } from 'rxjs/operators';
import * as fromActions from '../Users/user.actions';
import * as fromUserReducer from '../Users/user.reducer'

@Component({
  selector: 'app-Users',
  templateUrl: './Users.component.html',
  styleUrls: ['./Users.component.scss'],
})
export class UsersComponent implements OnInit, OnDestroy {
  users: User[];
  products: Product[] = [];
  listView = false;
  genders = [{ name: 'male' }, { name: 'female' }];
  defaultgender = 'male';
 

  constructor(private store: Store<fromUserReducer.State>) {}

  ngOnInit() {
    this.store.dispatch(new fromActions.GetUsersStart());
    this.store
      .select(fromUserReducer.getUsers)
      .pipe(map(state => state))
      .subscribe((users:any) => {
        this.users = users
      });
  }

  loadUsersByGender(f: NgForm) {
    this.store.dispatch(new fromActions.GetUsersGender(f.value));
  }

  loaduserbyname(f:NgForm) {
      this.store.dispatch(new fromActions.GetUsersName(f.value))
  }
  ngOnDestroy() {
    
  }
}
