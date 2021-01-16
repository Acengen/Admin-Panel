import { UserServiceService } from 'src/app/Service/UserService.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Interfaces/Product';

@Component({
  selector: 'app-Counter',
  templateUrl: './Counter.component.html',
  styleUrls: ['./Counter.component.scss']
})
export class CounterComponent implements OnInit {
  OrdersArray:Product[];
  customersCounter:number;
  messagesCounter:number;
  totalCash:number = 0;
  constructor(private http:HttpClient,private service:UserServiceService) { }

  ngOnInit() {
    this.service.getModelsCounter().subscribe(counterModels => {
      this.customersCounter = counterModels.customers;
      this.messagesCounter = counterModels.messages;
      this.OrdersArray = counterModels.orders;
      if(this.OrdersArray.length){
       let pricearr = this.OrdersArray.map(v => {
          return v.price
        });
        for(let i = 0; i<pricearr.length;i++) {
            this.totalCash += pricearr[i];
        }
      }
    })
  }

}
