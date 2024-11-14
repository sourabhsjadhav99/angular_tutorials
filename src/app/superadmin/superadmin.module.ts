import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperadminRoutingModule } from './superadmin-routing.module';
import { SigninComponent } from './signin/signin.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    SigninComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    SuperadminRoutingModule
  ]
})
export class SuperadminModule { }
