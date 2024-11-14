import { Component } from '@angular/core';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  serviceUsers: any[] = [];
  constructor(private userData: UserDataService) {
    this.serviceUsers = this.userData.users();
  }
}
