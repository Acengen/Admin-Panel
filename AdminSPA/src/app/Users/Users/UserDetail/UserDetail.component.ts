import { NgForm } from '@angular/forms';
import { User } from './../../../Interfaces/User';
import { UserServiceService } from './../../../Service/UserService.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../../app.reducer'
import * as fromActions from '../../store/userActions.actions'
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-UserDetail',
  templateUrl: './UserDetail.component.html',
  styleUrls: ['./UserDetail.component.scss']
})
export class UserDetailComponent implements OnInit {
  user:User;
  listView = false;
  iconsimg = "";
  userId:number;
  messageActive:boolean;
  userIndex;

  constructor(private router:ActivatedRoute, private service:UserServiceService,private store:Store<fromRoot.AppState>,private route:Router) { }

  ngOnInit() {
    this.router.params.subscribe(
      (param:Params) => {
        this.userId = +param['id']
        this.store.select('userList').pipe(map(resState => {
          return resState.user.find((v,index) => {
             this.userIndex = index;
             return v.id === this.userId 
          })
        })).subscribe(user => {
          this.user = user;
        })
        if(this.user.gender === 'male') {
          this.iconsimg = "../../../../assets/user-1-4.png";
        }else {
          this.iconsimg = "../../../../assets/windows-user-icon-5.jpg";
        }
      }
    )
    }

    acitivateMessage() {
      this.messageActive = !this.messageActive;
    }

    SendMsg(f:NgForm) {
      this.service.sendMsg(this.userId,f.value).subscribe(msg => console.log(msg))
    }

    deleteUser() {
       if(confirm("Are you sure you wont to ban this person")){
        this.store.dispatch(new fromActions.DeleteUser({index:this.userIndex,id:this.userId}));
      
        this.route.navigate(["/users"])
       }
         
    }
}
