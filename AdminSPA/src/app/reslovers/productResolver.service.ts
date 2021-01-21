import { Observable } from 'rxjs';
import { OrdersServiceService } from './../Service/OrdersService.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Product } from '../Interfaces/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductResolverService implements Resolve<Product> {
  
  resolve(route:ActivatedRouteSnapshot,state:RouterStateSnapshot): Observable<Product> | Promise<Product> | Product{
    return this.orderservice.getProduct(+route.params['id'])
  }
constructor(private orderservice:OrdersServiceService) { }

}
