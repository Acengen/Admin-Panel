import { Store } from '@ngrx/store';
import { User } from 'src/app/Interfaces/User';
import { UserServiceService } from 'src/app/Service/UserService.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params } from '@angular/router';
import { NgForm } from '@angular/forms';
import * as fromRoot from '../../../app.reducer'
import * as fromActions from '../../store/userActions.actions'


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
  constructor(private route:ActivatedRoute,private service: UserServiceService,private store:Store<fromRoot.AppState>) { }

  ngOnInit() {
    this.route.data.subscribe(
      (data:Data) => {
        console.log(data)
         this.user = data['data'];
         this.userId = data['data'].id;
      }
    )
  }

  UpdateUser(f:NgForm) {
    this.store.dispatch(new fromActions.UpdateUserStart({id:this.userId,name:f.value.name,street:f.value.street,city:f.value.city,gender:f.value.gender}))
  }

}
