import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubadminRoutingModule } from './subadmin-routing.module';
import { ListComponent } from './list/list.component';
import { SigninComponent } from './signin/signin.component';


@NgModule({
  declarations: [
    ListComponent,
    SigninComponent
  ],
  imports: [
    CommonModule,
    SubadminRoutingModule
  ]
})
export class SubadminModule { }
