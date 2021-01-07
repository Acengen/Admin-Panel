import { Store } from '@ngrx/store';
import { User } from 'src/app/Interfaces/User';
import { UserServiceService } from 'src/app/Service/UserService.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params } from '@angular/router';
import { NgForm } from '@angular/forms';
import * as fromReducer from '../../store/userReducer.reducer'
import { map } from 'rxjs/operators';
import { state } from '@angular/animations';

@Component({
  selector: 'app-UserEdit',
  templateUrl: './UserEdit.component.html',
  styleUrls: ['./UserEdit.component.scss']
})
export class UserEditComponent implements OnInit {
  userId:number;
  user:User;
  errorMsg:string;
  gender:string[] = ['male','female'];
  defaultGender:string = "male";
  constructor(private route:ActivatedRoute,private service: UserServiceService,private store:Store<fromReducer.AppState>) { }

  ngOnInit() {
    this.route.data.subscribe(
      (data:Data) => {
         this.user = data['data'];
         this.userId = data['data'].id;
      }
    )
  }

  UpdateUser(f:NgForm) {
    this.service.updateUser(this.userId, f.value).subscribe(
      res => {},
      error => {
        this.errorMsg = error.error.errors.Name[0];
      }
    )
  }

}
