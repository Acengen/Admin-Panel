import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Product } from '../Interfaces/Product';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromRoot from '../app.reducer';

@Injectable()
export class UserServiceService {
  products: Product[] = [];

  baseUrl = 'http://localhost:5000/api';

  constructor(
    private http: HttpClient,
    private router: Router,
    private store: Store<fromRoot.AppState>
  ) {}
  getProducts() {
    return this.http.get<Product[]>(this.baseUrl + '/user/products').pipe(
      tap((res) => {
        this.products = res;
      })
    );
  }
}
