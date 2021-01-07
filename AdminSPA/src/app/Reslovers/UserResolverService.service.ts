import { UserServiceService } from 'src/app/Service/UserService.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { User } from '../Interfaces/User';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class UserResolverServiceService implements Resolve<User> {

constructor(private service:UserServiceService,private store:Store) { }

resolve(route:ActivatedRouteSnapshot,state:RouterStateSnapshot) : Observable<User> | Promise<User> | User {
  return this.service.getUser(+route.params['id'])
}

}
