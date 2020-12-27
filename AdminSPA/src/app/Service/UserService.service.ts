import { User } from './../Interfaces/User';
import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {map, tap } from "rxjs/operators";
import { Product } from '../Interfaces/Product';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({providedIn:'root'})
export class UserServiceService {

users:User[] = [];
products:Product[] = [];

user:User;

userEmitter = new EventEmitter<User>();


baseUrl = "http://localhost:5000/api";

constructor(private http:HttpClient,private router:Router) { }


    getUserHttp(userparams?) {
        let params = new HttpParams();
        if(userparams != null) {
            params = params.append("gender", userparams.gender)
        }
       return this.http.get<User[]>(this.baseUrl + "/user", {params:params}).pipe(tap(res => {
            this.users = res;
        }))
    }

    getUser(id:number) {
        return this.http.get<User>("http://localhost:5000/api/user/" + id);
    }

    getProducts() {
       return this.http.get<Product[]>(this.baseUrl + "/user/products").pipe(tap(res => {
             this.products = res;
         }))
    }

    addUser(user:User,productName) {
        this.http.post<any>(this.baseUrl + "/user/add/" + productName,user).subscribe(res => {
            this.users.push(res);
            this.router.navigate(["/users"])
        });
    }

    updateUser(id:number,user:User){
        this.http.put<User>("http://localhost:5000/api/user/edit/" + id, user).subscribe(res => {
            let itemIndex = this.users.findIndex(item => item.id == res.id);
            this.users[itemIndex] = res;
        });
    }

    deleteUser(id:number,index:number) {
       return this.http.delete<User>("http://localhost:5000/api/user/" + id).subscribe(res => {
           this.users.splice(index,1);
       })
    }

}
