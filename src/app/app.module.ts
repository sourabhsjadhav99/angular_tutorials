import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponentComponent } from './user-component/user-component.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './user-list/user-list.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserAuthModule } from './user-auth/user-auth.module';
import { ChildComponent } from './child/child.component';
import { ReuseChildComponent } from './reuse-child/reuse-child.component';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { UsdToInrPipe } from './pipes/usd-to-inr.pipe';
import { RedElmDirective } from './directives/red-elm.directive';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { UsersComponent } from './users/users.component';
import { NopageComponent } from './nopage/nopage.component';
import { AboutCompanyComponent } from './about/about-company/about-company.component';
import { AboutServicesComponent } from './about/about-services/about-services.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminModule } from './admin/admin.module';
import { SubadminModule } from './subadmin/subadmin.module';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponentComponent,
    MainpageComponent,
    HomeComponent,
    UserListComponent,
    AdminListComponent,
    UsersListComponent,
    ChildComponent,
    ReuseChildComponent,
    UsdToInrPipe,
    RedElmDirective,
    AboutComponent,
    ContactComponent,
    UsersComponent,
    NopageComponent,
    AboutCompanyComponent,
    AboutServicesComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    UserAuthModule, //  other module need to import
    FormsModule, // to work with forms and for two way binding
    HttpClientModule, // for fetching data
    AdminModule, // for module routing
    SubadminModule, // e.g for group routing
    ReactiveFormsModule // for reactive form
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
