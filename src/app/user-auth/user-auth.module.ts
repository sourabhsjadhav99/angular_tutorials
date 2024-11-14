import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    FormsModule, // for template form
    ReactiveFormsModule // for reactive form

  ], 
  exports:[
    LoginComponent,
    FormComponent
  ]
})
export class UserAuthModule { }
