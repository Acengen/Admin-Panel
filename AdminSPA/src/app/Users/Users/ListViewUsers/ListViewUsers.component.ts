import { UserServiceService } from './../../../Service/UserService.service';
import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/Interfaces/User';

@Component({
  selector: '[app-ListViewUsers]',
  templateUrl: './ListViewUsers.component.html',
  styleUrls: ['./ListViewUsers.component.scss']
})
export class ListViewUsersComponent implements OnInit {
  @Input() user:User;
  @Input() index:number;
  constructor(private service:UserServiceService) { }

  ngOnInit() {
   
  }

  deleteUser(id,index) {
      this.service.deleteUser(id,index);
  }

}
