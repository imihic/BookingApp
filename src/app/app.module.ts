import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from  './app.component';
import {HeaderComponent} from './shared/header/header.component';

import {RentModule} from './rental/rent.module';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

// root module
@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        LoginComponent,
        RegisterComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RentModule
  ],

    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
