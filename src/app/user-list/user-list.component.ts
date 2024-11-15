import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styles: [".change-bg{background-color:wheat}"
  ]
})
export class UserListComponent {

  constructor(private router: Router) {
    
  }
  users = [
    {
      id: 1,
      name: 'Sourabh',
      email: 'sourabh@gmail.com',
      phone: 9456789,
      social: ['facebook', 'twitter'],
    },
    {
      id: 2,
      name: 'Ankit',
      email: 'ankit@gmail.com',
      phone: 9876543,
      social: ['facebook', 'whatsapp'],
    },
    {
      id: 3,
      name: 'Shubham',
      email: 'shubham@gmail.com',
      phone: 8765432,
      social: ['facebook'],
    },
  ];


  userClick(user:any){
    this.router.navigate(['/users', user.id, user.name]);
  }

}
