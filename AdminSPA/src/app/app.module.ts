import { UserDetailComponent } from './Users/Users/UserDetail/UserDetail.component';
import { ListViewUsersComponent } from './Users/Users/ListViewUsers/ListViewUsers.component';
import { UserEditComponent } from './Users/Users/UserEdit/UserEdit.component';
import { UserAddComponent } from './Users/Users/UserAdd/UserAdd/UserAdd.component';
import { NavbarComponent } from './Navbar/Navbar/Navbar.component';
import { UsersComponent } from './Users/Users/Users.component';
import { UserComponent } from './Users/Users/User/User.component';
import { routes } from './myroute.routing';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './About/About.component';

@NgModule({
  declarations: [	
    AppComponent,
    UsersComponent,
    UserComponent,
    NavbarComponent,
    UserAddComponent,
    UserEditComponent,
    ListViewUsersComponent,
    UserDetailComponent,
      AboutComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    TooltipModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
