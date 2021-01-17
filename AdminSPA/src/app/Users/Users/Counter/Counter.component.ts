import { UserServiceService } from 'src/app/Service/UserService.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Interfaces/Product';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../app.reducer';
import { map } from 'rxjs/operators';

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
  constructor(private http:HttpClient,private service:UserServiceService,private store:Store<fromRoot.AppState>) { }

  ngOnInit() {
    this.service.getModelsCounter().subscribe(counterModels => {
      this.customersCounter = counterModels.customers;
      this.messagesCounter = counterModels.messages;
      this.OrdersArray = counterModels.orders;
    });
    //store init
    this.store.select('userList').pipe(map(state => state.user)).subscribe(
      users => {
          if(users){
            for(let key in users){
              this.totalCash += users[key].productPrice
            }
          }
      }
    )
  }

}
