import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../Interfaces/Product';

@Injectable({
  providedIn: 'root',
})
export class OrdersServiceService {

  products:Product[];

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<Product[]>("http://localhost:5000/api/user/products").pipe(tap(res => {
        this.products = res
    }))
  }

  getProduct(id:number) {
    return this.http.get<Product>("http://localhost:5000/api/user/product/" + id);
  }

  removeProduct(id:number,index:number) {
    this.http.delete<Product>("http://localhost:5000/api/user/productRemove/" + id).subscribe(res => {
        this.products.splice(index,1);
    })
  }

  updateProduct(product:Product,id:number){
    this.http.put<Product>("http://localhost:5000/api/user/product/" + id + "/update", product).subscribe(
      resData => {
         let productId = this.products.findIndex(v => v.id ===resData.id);
         this.products[productId] = resData
      }
    )
  }
}
