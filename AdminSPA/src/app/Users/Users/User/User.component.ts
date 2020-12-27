import { UserServiceService } from 'src/app/Service/UserService.service';
import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/Interfaces/User';

@Component({
  selector: 'app-User',
  templateUrl: './User.component.html',
  styleUrls: ['./User.component.scss']
})
export class UserComponent implements OnInit {
  @Input() user:User;
  @Input() index:number;
  iconsimg = "";
  constructor(private service:UserServiceService) { }

  ngOnInit() {
    if(this.user.gender === 'male') {
      this.iconsimg = "../../../../assets/user-1-4.png";
    }else {
      this.iconsimg = "../../../../assets/windows-user-icon-5.jpg";
    }
  }

  deleteReq(id,index) {
      this.service.deleteUser(id,index);
  }

}
