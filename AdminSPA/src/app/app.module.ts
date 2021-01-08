import { UserServiceService } from 'src/app/Service/UserService.service';
import { NavbarComponent } from './Navbar/Navbar/Navbar.component';

import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './About/About.component';
import { UserResolverServiceService } from './Reslovers/UserResolverService.service';
import { UserAddComponent } from './Users/Users/UserAdd/UserAdd/UserAdd.component';
import { UserDetailComponent } from './Users/Users/UserDetail/UserDetail.component';
import { UserEditComponent } from './Users/Users/UserEdit/UserEdit.component';
import { UsersComponent } from './Users/Users/Users.component';
import { UserComponent } from './Users/Users/User/User.component';
import { ListViewUsersComponent } from './Users/Users/ListViewUsers/ListViewUsers.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { UserEffects } from './Users/store/user.effects';
import { appreducers } from './app.reducer';

export const approute: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  {
    path: 'users',
    component: UsersComponent,
    children: [
      {
        path: ':id/edit',
        component: UserEditComponent,
        resolve: { data: UserResolverServiceService },
      },
      { path: 'add', component: UserAddComponent },
    ],
  },
  {
    path: 'users/:id',
    component: UserDetailComponent
  },
  { path: 'about', component: AboutComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    UserComponent,
    UsersComponent,
    UserEditComponent,
    UserAddComponent,
    UserDetailComponent,
    ListViewUsersComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(approute),
    FormsModule,
    HttpClientModule,
    EffectsModule.forRoot([UserEffects]),
    StoreModule.forRoot(appreducers),
    TooltipModule.forRoot(),
  ],
  providers: [UserServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
