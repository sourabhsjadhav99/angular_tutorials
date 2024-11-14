import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from '../subadmin/list/list.component';
import { SigninComponent } from '../subadmin/signin/signin.component';


const routes: Routes = [
  {path:"list", component:ListComponent},
  {path:"login", component:SigninComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuperadminRoutingModule {}
