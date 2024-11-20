import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {ListComponent} from './list/list.component';
import {SigninComponent} from './signin/signin.component';



const routes: Routes = [
  {path: "list",component: ListComponent},
  {path: "login",component: SigninComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuperadminRoutingModule {}
