import { OrdersServiceService } from './../../Service/OrdersService.service';
import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/Interfaces/Product';

@Component({
  selector: '[app-OrdersItem]',
  templateUrl: './OrdersItem.component.html',
  styleUrls: ['./OrdersItem.component.scss']
})
export class OrdersItemComponent implements OnInit {
  @Input() product:Product;
  @Input() index:number;
  constructor(private orderService:OrdersServiceService) { }

  ngOnInit() {
  }

  deleteProduct() {
      this.orderService.removeProduct(this.product.id,this.index);
  }

}
