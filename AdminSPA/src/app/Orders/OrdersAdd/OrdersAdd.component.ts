import { Router } from '@angular/router';
import { OrdersServiceService } from './../../Service/OrdersService.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-OrdersAdd',
  templateUrl: './OrdersAdd.component.html',
  styleUrls: ['./OrdersAdd.component.scss']
})
export class OrdersAddComponent implements OnInit {

  constructor(private ordersService:OrdersServiceService,private router:Router) { }

  ngOnInit() {
  }

  onSubmit(f:NgForm) {
    this.ordersService.addProduct(f.value)
  }

  GoBack() {
      this.router.navigate(["/products"])
  }

}
