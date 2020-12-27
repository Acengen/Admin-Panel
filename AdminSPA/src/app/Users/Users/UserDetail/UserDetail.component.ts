import { User } from './../../../Interfaces/User';
import { UserServiceService } from './../../../Service/UserService.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params } from '@angular/router';

@Component({
  selector: 'app-UserDetail',
  templateUrl: './UserDetail.component.html',
  styleUrls: ['./UserDetail.component.scss']
})
export class UserDetailComponent implements OnInit {
  user:User;
  listView = false;
  iconsimg = "";

  constructor(private router:ActivatedRoute, private service:UserServiceService) { }

  ngOnInit() {
    this.router.data.subscribe(
      (data:Data) => {
        this.user = data['data'];
        if(this.user.gender === 'male') {
          this.iconsimg = "../../../../assets/user-1-4.png";
        }else {
          this.iconsimg = "../../../../assets/windows-user-icon-5.jpg";
        }
      }
    )
    }
}
