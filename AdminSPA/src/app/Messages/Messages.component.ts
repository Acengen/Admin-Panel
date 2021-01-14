import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromActions from '../Users/store/userActions.actions';
import * as fromRoot from '../app.reducer';

@Component({
  selector: 'app-Messages',
  templateUrl: './Messages.component.html',
  styleUrls: ['./Messages.component.scss']
})
export class MessagesComponent implements OnInit {

  constructor(private store:Store<fromRoot.AppState>) { }

  ngOnInit() {
    this.store.select('userList').subscribe(state => console.log(state))
  }

}
