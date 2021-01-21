import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router, Data } from '@angular/router';
import { OrdersServiceService } from './../../Service/OrdersService.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Interfaces/Product';

@Component({
  selector: 'app-OrdersUpdate',
  templateUrl: './OrdersUpdate.component.html',
  styleUrls: ['./OrdersUpdate.component.scss']
})
export class OrdersUpdateComponent implements OnInit {
  product:Product;
  constructor(private ordersService:OrdersServiceService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.route.data.subscribe(
      (data:Data) => {
        this.product = data['product']
      }
    )
  }

  onSubmit(f:NgForm) {
    this.ordersService.updateProduct(f.value,this.product.id)
  }

  GoBack() {
      this.router.navigate(["/products"])
  }

}
