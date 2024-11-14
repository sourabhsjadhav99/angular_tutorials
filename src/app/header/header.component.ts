import { Component } from '@angular/core';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  serviceUsers: any[] = [];
  constructor(private userData: UserDataService) {
    this.serviceUsers = this.userData.users();
  }


}
