import { OrdersServiceService } from './../Service/OrdersService.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../Interfaces/Product';

@Component({
  selector: 'app-Orders',
  templateUrl: './Orders.component.html',
  styleUrls: ['./Orders.component.scss']
})
export class OrdersComponent implements OnInit {
  products:Product[]
  constructor(private orderService:OrdersServiceService) { }

  ngOnInit() {
      this.orderService.getProducts().subscribe(res => {
        this.products = this.orderService.products
      })
  }

}
