import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  constructor(private router: Router, private activeRoute: ActivatedRoute) {}

  navigateToAboutCompany() {
    this.router.navigate(['company'], { relativeTo: this.activeRoute });
  }

  navigateToAboutServices() {
    this.router.navigate(['services'], { relativeTo: this.activeRoute });
  }
}
