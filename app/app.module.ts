import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ASMIComponent } from './asmi.component';
import { RouterModule, Routes } from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { UserGuard } from './userGuard';
import { PublicComponent } from './Layouts/public.component';
import { SecureComponent } from './Layouts/secure.component';
import { LoginComponent } from './Components/Login/login.component';
import { HomeComponent } from './Components/Home/home.component';
import { FormsModule } from '@angular/forms';
import { LoginService } from './Services/LoginService';
import { HttpModule, JsonpModule } from '@angular/http';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    FormsModule,
    HttpModule, 
    JsonpModule
  ],
  declarations: [
    ASMIComponent,
    PublicComponent,
    SecureComponent,
    LoginComponent,
    HomeComponent
  ],
  providers: [
    UserGuard, LoginService, 
  ],
  bootstrap: [ASMIComponent]
})
export class AppModule { }
