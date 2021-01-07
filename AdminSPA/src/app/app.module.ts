import { UserServiceService } from 'src/app/Service/UserService.service';
import { NavbarComponent } from './Navbar/Navbar/Navbar.component';

import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './About/About.component';
import { StoreModule } from '@ngrx/store';
import { UserReducer } from './Users/store/userReducer.reducer';
import { UserModule } from './Users/users.module';


export const approute: Routes = [
  {path:"about", component: AboutComponent}
];
@NgModule({
  declarations: [	
    AppComponent,
    NavbarComponent,
    AboutComponent,
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(approute),
    FormsModule,
    StoreModule.forRoot({userList:UserReducer}),
    TooltipModule.forRoot(),
    UserModule
  ],
  providers: [UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
