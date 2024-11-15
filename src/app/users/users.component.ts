import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  // selector: 'app-users',
  // selector:".app-users",
  selector:'[app-users]',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  userId: string|null=''

  userName:string | null=''
  constructor(private route: ActivatedRoute) {}


  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id');
    this.userName = this.route.snapshot.paramMap.get('name');
  }

  


}
