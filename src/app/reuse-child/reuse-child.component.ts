import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reuse-child',
  templateUrl: './reuse-child.component.html',
  styleUrls: ['./reuse-child.component.css']
})
export class ReuseChildComponent {
    @Input() item: {name:string,email:string, phone:number}={name:"", email:"", phone:0}
  }

