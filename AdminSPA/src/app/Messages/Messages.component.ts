import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromActions from '../Users/store/userActions.actions';
import * as fromRoot from '../app.reducer';
import { map } from 'rxjs/operators';
import { Message } from '../Interfaces/Message';

@Component({
  selector: 'app-Messages',
  templateUrl: './Messages.component.html',
  styleUrls: ['./Messages.component.scss']
})
export class MessagesComponent implements OnInit {
  messages:Message[]
  constructor(private store:Store<fromRoot.AppState>) { }

  ngOnInit() {
    this.store.dispatch(new fromActions.GetMsgStart());
    this.store.select('userList').pipe(map(state => state.msg)).subscribe(
      msg => this.messages = msg
    )
  }

  approveMsg(id:number,message:Message) {
    this.store.dispatch(new fromActions.ApproveMsgStart({id,message}))
  }

}
