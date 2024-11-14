import { Component } from '@angular/core';
import { UserDataService } from './services/user-data.service';
import { ProductsDataService } from './services/products-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  products: any = [];
  constructor(private productData: ProductsDataService) {
    this.productData.getData().subscribe(
      (response) => {
        this.products = response;
        console.log(response);
      },

      (error) => {
        console.error(error);
      }
    );
  }

  title = 'user-app';

  onSubmit = (name: string) => {
    alert(`hello ${name}`);
  };

  consoleValue = (value: string) => {
    console.log(value);
  };

  takeInputValue: string = '';
  getValue = (value: string) => {
    this.takeInputValue = value;
  };

  // for binding
  isDisabled: boolean = false;

  // if-else
  showData: boolean = false;
  show: string = 'yes';

  // if else-if, dynamic style
  color: string = 'orange';
  font: string = 'white';

  changeColor(newColor: string) {
    this.font = newColor;
  }
  // for loop
  users = [
    {
      name: 'Sourabh',
      email: 'sourabh@gmail.com',
      phone: 9456789,
      social: ['facebook', 'twitter'],
    },
    {
      name: 'Ankit',
      email: 'ankit@gmail.com',
      phone: 9876543,
      social: ['facebook', 'whatsapp'],
    },
    {
      name: 'Shubham',
      email: 'shubham@gmail.com',
      phone: 8765432,
      social: ['facebook'],
    },
  ];

  // toggle values
  showValue: boolean = true;
  toggelValue() {
    this.showValue = !this.showValue;
  }

  // data transfer from parents to child
  parentData: string = 'Hello from Parent!';

  changeText() {
    this.parentData = 'Hello from Parent! Changed';
  }

  // reusable component
  reusableUsers = [
    { name: 'Sourabh', email: 'sourabh@gmail.com', phone: 9456789 },
    { name: 'Ankit', email: 'ankit@gmail.com', phone: 9876543 },
    { name: 'Shubham', email: 'shubham@gmail.com', phone: 8765432 },
  ];

  // child to parent data transfer
  getChildData(data: string) {
    console.log(data);
  }

  // two way binding
  twoBindingName: string = '';

  // pipes

  pipeTitle = 'Hello World';
  pipeDate = new Date();
  userJson = {
    name: 'John',
    age: 30,
  };

  // directive
  directiveElement = 'directive element';

  // post data
  getUserFormData(data: any) {
    this.productData.sendData(data).subscribe((data) => console.log(data));
  }
}
