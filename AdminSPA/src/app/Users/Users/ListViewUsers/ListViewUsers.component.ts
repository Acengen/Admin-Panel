import { UserServiceService } from './../../../Service/UserService.service';
import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/Interfaces/User';
import { Store } from '@ngrx/store';

import * as fromReducer from '../../store/userReducer.reducer'
import { map } from 'rxjs/operators';

@Component({
  selector: '[app-ListViewUsers]',
  templateUrl: './ListViewUsers.component.html',
  styleUrls: ['./ListViewUsers.component.scss']
})
export class ListViewUsersComponent implements OnInit {
  @Input() user:User;
  @Input() index:number;
  constructor(private service:UserServiceService,private store:Store<fromReducer.AppState>) { }

  ngOnInit() {
       
  }

  deleteUser(id,index) {
      this.service.deleteUser(id,index).subscribe();
  }

}
