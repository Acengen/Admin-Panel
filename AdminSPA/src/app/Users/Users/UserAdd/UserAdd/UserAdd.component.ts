import { User } from 'src/app/Interfaces/User';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from 'src/app/Interfaces/Product';
import { UserServiceService } from 'src/app/Service/UserService.service';

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
  constructor(private service:UserServiceService) { }

  ngOnInit() {
    this.service.getProducts().subscribe(
      res => {
        this.products = this.service.products;
      }
    );
  }

  AddUser(f:NgForm){
    this.service.addUser(f.value,f.value.products);
    
  }

}
