import {Component,ElementRef,OnInit,ViewChild} from '@angular/core';
import {UserDataService} from './services/user-data.service';
import {ProductsDataService} from './services/products-data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  products: any = [];
  public conditionalClass: boolean = true;
  constructor(private productData: ProductsDataService,private router: Router) {
  }


  ngOnInit(): void {
    // Calling the getData() method to fetch data
    this.productData.getData().subscribe(
      (response) => {
        // Handle the successful response
        this.products = response;
        console.log('Fetched Data:',this.products);
      },
      (error) => {
        // Handle any error that occurs during the request
        console.error('Error fetching data:',error);
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

  conditionalClassfun() {
    return 'change-bg';
  }

  // conditional style
  conditionalColor() {
    return 'red';
  }
  // if-else
  showData: boolean = false;
  show: string = 'yes';

  // if else-if, dynamic style
  color: string = 'red';
  font: string = 'white';

  changeColor(newColor: string) {
    this.font = newColor;
  }
  // for loop
  users = [
    {
      id: 1,
      name: 'Sourabh',
      email: 'sourabh@gmail.com',
      phone: 9456789,
      social: ['facebook','twitter'],
    },
    {
      id: 2,
      name: 'Ankit',
      email: 'ankit@gmail.com',
      phone: 9876543,
      social: ['facebook','whatsapp'],
    },
    {
      id: 3,
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

  // child to parent data transfer
  dataFromChild: string = '';

  receiveData(data: string) {
    this.dataFromChild = data; // Store the received data
  }

  // reusable component
  reusableUsers = [
    {name: 'Sourabh',email: 'sourabh@gmail.com',phone: 9456789},
    {name: 'Ankit',email: 'ankit@gmail.com',phone: 9876543},
    {name: 'Shubham',email: 'shubham@gmail.com',phone: 8765432},
  ];

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



  // routes 


  // post data
  getUserFormData(data: any) {
    // this.productData.sendData(data).subscribe((data) => console.log(data));

    // Example of sending data using the sendData() method (POST request)
    this.productData.sendData(data).subscribe(
      (response) => {
        // Handle successful response after sending data
        console.log('Data sent successfully:',response);
      },
      (error) => {
        // Handle error while sending data
        console.error('Error sending data:',error);
      }
    );
  }



  // ng-content dynamic components 

  courses = [
    {title: "Python",description: "this is python course"},
    {title: "Angular",description: "this is angular course"},
    {title: "React",description: "this is react course"},
    {title: "Node",description: "this is node course"}
  ]


  // ngStyle 

  ngStyleVariable = "Hello world"


viewChildVar:string=''
  // @viewChild 
  @ViewChild('#getValue') inputVal: ElementRef | any
  getInputValue(): void {
    this.viewChildVar= this.inputVal?.nativeElement?.value;

  }


}

