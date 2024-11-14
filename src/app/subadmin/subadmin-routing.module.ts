import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {path:"subadmin",
    children:[
      {path:'login', component: SigninComponent},
      {path:'list', component: ListComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubadminRoutingModule { }
