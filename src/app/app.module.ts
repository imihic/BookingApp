import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from  './app.component';
import {HeaderComponent} from './shared/header/header.component';

import {RentModule} from './rental/rent.module';
import {AuthModule} from './auth/auth.module';

// root module
@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RentModule,
    AuthModule
  ],

    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
