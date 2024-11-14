import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  // parent to child
  @Input() childData: string = '';

  // to chane name of variable coming from parent
  // @Input('childData') newData: string = '';


  // child to parent
  @Output() dataEmitter: EventEmitter<string> = new EventEmitter();
  inputData: string = '';

  sendDataToParent() {
    this.dataEmitter.emit(this.inputData); // Emit input data to parent
  }
}
