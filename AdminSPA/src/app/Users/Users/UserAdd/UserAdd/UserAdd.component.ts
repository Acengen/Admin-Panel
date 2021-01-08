import { User } from 'src/app/Interfaces/User';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from 'src/app/Interfaces/Product';
import { UserServiceService } from 'src/app/Service/UserService.service';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../../app.reducer';
import * as fromActions from '../../../store/userActions.actions';




@Component({
  selector: 'app-UserAdd',
  templateUrl: './UserAdd.component.html',
  styleUrls: ['./UserAdd.component.scss']
})
export class UserAddComponent implements OnInit {
  products:Product[];
  users:User[];
  gender:string[] = ['male','female'];
  defaultProduct:string = "Razor Shave";
  defaultGender:string = "male";
  succefullResponMsg:string;
  constructor(private service:UserServiceService,private store:Store<fromRoot.AppState>) { }

  ngOnInit() {
    this.service.getProducts().subscribe(
      res => {
        this.products = this.service.products;
      }
    );
  }

  AddUser(f:NgForm){
    this.service.addUser(f.value,f.value.products).subscribe(res => {
      this.succefullResponMsg = "User Added";
      setTimeout(() => {
        this.succefullResponMsg = '';
      },1000)
    })
   
  }

}
