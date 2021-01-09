import { User } from './../Interfaces/User';
import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {map, tap } from "rxjs/operators";
import { Product } from '../Interfaces/Product';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromRoot from '../app.reducer';
import * as fromActions from '../Users/store/userActions.actions';



@Injectable()
export class UserServiceService {

users:User[] = [];
products:Product[] = [];


user:User;

userEmitter = new EventEmitter<User>();


baseUrl = "http://localhost:5000/api";

constructor(private http:HttpClient,private router:Router,private store:Store<fromRoot.AppState>) { }

    
    // getUserHttp(userParams?) { 
    //   let params = new HttpParams();
    //   if(userParams != null) {
    //       params = params.append('gender', userParams.gender)
    //   }
    //    return this.http.get<User[]>(this.baseUrl + "/user", {params})
    // }

    getUser(id:number) {
        return this.http.get<User>("http://localhost:5000/api/user/" + id);
    }

    getProducts() {
       return this.http.get<Product[]>(this.baseUrl + "/user/products").pipe(tap(res => {
             this.products = res;
         }))
    }

    // addUser(user:User,productName:string) {
    //    return this.http.post<any>(this.baseUrl + "/user/add/" + productName,user).pipe(tap(res => {
    //     this.store.dispatch(new fromActions.AddUser(res))
    //    }))
    // }

}
