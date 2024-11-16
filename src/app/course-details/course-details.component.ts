import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css'],
})
export class CourseDetailsComponent {
  constructor(private router: Router) {}

  close() {
    this.router.navigate([{ outlets: { 'course-details': null } }]);
  }
}
