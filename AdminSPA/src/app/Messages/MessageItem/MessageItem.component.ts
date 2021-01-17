import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { Message } from 'src/app/Interfaces/Message';
import * as fromRoot from '../../app.reducer';
import * as fromActions from '../../Users/store/userActions.actions';

@Component({
  selector: '[app-MessageItem]',
  templateUrl: './MessageItem.component.html',
  styleUrls: ['./MessageItem.component.scss']
})
export class MessageItemComponent implements OnInit {
  @Input() message:Message;
  constructor(private store:Store<fromRoot.AppState>,private http:HttpClient) { }

  ngOnInit() {
  }

  approveMsg(id:number,message:Message) {
    this.store.dispatch(new fromActions.ApproveMsgStart({id:id,message:message}))
   
  }
}
