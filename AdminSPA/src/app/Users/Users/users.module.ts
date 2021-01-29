import { UsersHttp } from './users.effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { UserComponent } from "./User/User.component";
import { UserAddComponent } from "./UserAdd/UserAdd/UserAdd.component";
import { UserDetailComponent } from "./UserDetail/UserDetail.component";
import { UserEditComponent } from "./UserEdit/UserEdit.component";
import { UsersComponent } from "./Users.component";
import { CounterComponent } from './Counter/Counter.component';
import { ListViewUsersComponent } from './ListViewUsers/ListViewUsers.component';
import { UserReducer } from '../store/userReducer.reducer';
import { UsersReducer } from './user.reducer';


const routes:Routes = [
  {
    path: 'users',
    component: UsersComponent,
    children: [
      {
        path: ':id/edit',
        component: UserEditComponent,
      },
      { path: 'add', component: UserAddComponent },
    ],
  },
  {
    path: 'users/:id',
    component: UserDetailComponent
  },
]

@NgModule({
    declarations:[ 
        UserComponent,
        UsersComponent,
        UserEditComponent,
        UserAddComponent,
        UserDetailComponent,
        CounterComponent,
        ListViewUsersComponent
    ],
    imports:[
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes),
        StoreModule.forFeature('user',UsersReducer),
        EffectsModule.forFeature([UsersHttp])
    ],
    exports:[
        UserComponent,
        UsersComponent,
        UserEditComponent,
        UserAddComponent,
        UserDetailComponent,
        CounterComponent,
        ListViewUsersComponent
    ]
})

export class UserModule {}