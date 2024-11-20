// import { Injectable } from '@angular/core';
// import {HttpClient } from '@angular/common/http';

// @Injectable({
//   providedIn: 'root'
// })
// export class ProductsDataService {

//   constructor(private http:HttpClient) { }
//   url="https://jsonplaceholder.typicode.com/todos"
  

//   getData(){
//     return this.http.get(this.url); // replace with your API URL
//   }

//   sendData(data:any){
//     return this.http.post(this.url, data ); // replace with your API URL
//   }

// }
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';  // Make sure to import Observable if needed

@Injectable({
  providedIn: 'root'
})
export class ProductsDataService {

  private url = "https://jsonplaceholder.typicode.com/todos"; // API URL

  constructor(private http: HttpClient) {}

  // Method to fetch data (GET)
  getData(): Observable<any> {
    return this.http.get(this.url); // HTTP GET request returns an Observable
  }

  // Method to send data (POST)
  sendData(data: any): Observable<any> {
    return this.http.post(this.url, data); // HTTP POST request returns an Observable
  }
}
