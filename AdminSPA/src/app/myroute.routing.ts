import { AboutComponent } from './About/About.component';
import { UserDetailComponent } from './Users/Users/UserDetail/UserDetail.component';
import { UserResolverServiceService } from './Reslovers/UserResolverService.service';
import { UserEditComponent } from './Users/Users/UserEdit/UserEdit.component';
import { UserAddComponent } from './Users/Users/UserAdd/UserAdd/UserAdd.component';
import { UsersComponent } from './Users/Users/Users.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path:"", redirectTo:"/users", pathMatch:'full' },
  {path: "users", component: UsersComponent, children:[
    {path:":id/edit", component:UserEditComponent, resolve:{data:UserResolverServiceService}},
    {path:"add",component:UserAddComponent}
  ]},
  {path:"users/:id", component:UserDetailComponent, resolve:{data:UserResolverServiceService}},
  {path:"about", component: AboutComponent}
];

