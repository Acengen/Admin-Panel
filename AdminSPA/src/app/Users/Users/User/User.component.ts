import { UserServiceService } from 'src/app/Service/UserService.service';
import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/Interfaces/User';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../app.reducer'
import * as fromActions from '../../store/userActions.actions'
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-User',
  templateUrl: './User.component.html',
  styleUrls: ['./User.component.scss']
})
export class UserComponent implements OnInit {
  @Input() user:User;
  @Input() index:number;
  iconsimg = "";
  constructor(private service:UserServiceService,private store:Store<fromRoot.AppState>) { }

  ngOnInit() {
    if(this.user.gender === 'male') {
      this.iconsimg = "../../../../assets/user-1-4.png";
    }else {
      this.iconsimg = "../../../../assets/windows-user-icon-5.jpg";
    }
  }

  deleteReq(index,id) {
      this.store.dispatch(new fromActions.DeleteUser({index:index,id:id}))
  }

}
