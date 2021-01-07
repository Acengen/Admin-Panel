import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { UserResolverServiceService } from '../Reslovers/UserResolverService.service';
import { UserAddComponent } from './Users/UserAdd/UserAdd/UserAdd.component';
import { UserDetailComponent } from './Users/UserDetail/UserDetail.component';
import { UserEditComponent } from './Users/UserEdit/UserEdit.component';
import { UsersComponent } from './Users/Users.component';
import { HttpClientModule } from '@angular/common/http';
import { ListViewUsersComponent } from './Users/ListViewUsers/ListViewUsers.component';
import { UserComponent } from './Users/User/User.component';

export const approutes:Routes = [
    { path:"", redirectTo:"/users", pathMatch:'full' },
    {path: "users", component: UsersComponent, children:[
        {path:":id/edit", component:UserEditComponent, resolve:{data:UserResolverServiceService}},
        {path:"add",component:UserAddComponent}
      ]},
    {path:"users/:id", component:UserDetailComponent, resolve:{data:UserResolverServiceService}},
]

@NgModule({
    declarations:[
        UserComponent,
        UsersComponent,
        UserEditComponent,
        UserAddComponent,
        UserDetailComponent,
        ListViewUsersComponent
    ],
    imports:[
        CommonModule,
        FormsModule,
        RouterModule.forChild(approutes),
        HttpClientModule,
    ]
})

export class UserModule {}