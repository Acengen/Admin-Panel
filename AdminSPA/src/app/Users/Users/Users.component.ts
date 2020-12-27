import { UserServiceService } from './../../Service/UserService.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from 'src/app/Interfaces/User';
import { Product } from 'src/app/Interfaces/Product';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-Users',
  templateUrl: './Users.component.html',
  styleUrls: ['./Users.component.scss']
})
export class UsersComponent implements OnInit {
  users:User[];
  products:Product[] = [];
  listView = false;
  genders = [{name:"male"},{name:"female"}];
  defaultgender = "male";
  constructor(private service:UserServiceService) { }

  ngOnInit() {
    this.service.getUserHttp().subscribe(
      res => {
        this.users = this.service.users;
      }
    );
  }

  loadUsersByGender(f:NgForm) {
    this.service.getUserHttp(f.value).subscribe(
      res => this.users = res
    )
  }
  

  

}
