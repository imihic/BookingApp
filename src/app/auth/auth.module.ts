import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {forbiddenEmailDirective} from '../shared/validators/forbidden-email.directive';
import {SameAsDirective} from '../shared/validators/same-as.directive';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    forbiddenEmailDirective,
    SameAsDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
