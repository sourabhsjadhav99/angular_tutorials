import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponentComponent } from './user-component/user-component.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { UsersComponent } from './users/users.component';
import { NopageComponent } from './nopage/nopage.component';
import { AboutCompanyComponent } from './about/about-company/about-company.component';
import { AboutServicesComponent } from './about/about-services/about-services.component';

const routes: Routes = [
  // {path:"", component:UserComponentComponent},
  // {path:"main", component:MainpageComponent}


  
  // {path:"home", component:HomeComponent},
  // {path:"about",
  //   component:AboutComponent,
  //   children: [
  //     {path:"company", component: AboutCompanyComponent},
  //     {path:"services", component:AboutServicesComponent},

  //   ]
  // },
  // {path:"contact", component:ContactComponent},
  // {path:"users/:id", component:UsersComponent},
  // {path:"**", component:NopageComponent},
  {
    path: 'superadmin',
    loadChildren: () =>
      import('./superadmin/superadmin.module').then((mod) => mod.SuperadminModule), // Ensure you return the module here
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
