import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from 'src/app/Interfaces/User';
import { Product } from 'src/app/Interfaces/Product';
import { Subscription, Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../app.reducer';
import { map } from 'rxjs/operators';
import * as fromActions from '../store/userActions.actions';

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
  usersSub: Subscription;

  constructor(private store: Store<fromRoot.AppState>) {}

  ngOnInit() {
    this.store.dispatch(new fromActions.GetUsersStart());
    this.usersSub = this.store
      .select('userList')
      .pipe(map((resState) => resState.user))
      .subscribe((users) => {
        this.users = users;
      });
  }

  loadUsersByGender(f: NgForm) {
    this.store.dispatch(new fromActions.GetUsersGender(f.value));
  }

  ngOnDestroy() {
    this.usersSub.unsubscribe();
  }
}
