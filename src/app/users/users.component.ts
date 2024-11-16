import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: '[app-users]', // Attribute selector
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  userId: string | null = '';
  userName: string | null = '';

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // Get route parameters using ActivatedRoute
    // this.userId = this.activatedRoute.snapshot.paramMap.get('id');
    // this.userName = this.activatedRoute.snapshot.paramMap.get('name');

    // other way -- better way than snapshot
    this.activatedRoute.paramMap.subscribe((params:ParamMap) => {
      this.userId = params.get('id');
      this.userName = params.get('name');
    });
  }

  // back button 
  goToEmployeeList(): void {
    let selectedId = this.userId;
    // for optional routes use {}
    // go to user list and get this id
    this.router.navigate(['/users', { id: selectedId }]);
  }


}
