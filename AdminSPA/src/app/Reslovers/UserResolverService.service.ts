import { UserServiceService } from 'src/app/Service/UserService.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { User } from '../Interfaces/User';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Actions, ofType } from '@ngrx/effects';
import { exhaustMap, map, switchMap, take } from 'rxjs/operators';
import * as fromActions from '../Users/store/userActions.actions'
import * as fromRoot from '../app.reducer'

@Injectable({
  providedIn: 'root'
})
export class UserResolverServiceService implements Resolve<User> {

constructor(private service:UserServiceService,private store:Store<fromRoot.AppState>,private actions$:Actions) { }

resolve(route:ActivatedRouteSnapshot,state:RouterStateSnapshot) : Observable<User> | Promise<User> | User {
    return this.service.getUser(+route.params.id)
    
}

}
