import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsDataService {

  constructor(private http:HttpClient) { }
  url="https://jsonplaceholder.typicode.com/todos"
  

  getData(){
    return this.http.get(this.url); // replace with your API URL
  }

  sendData(data:any){
    return this.http.post(this.url, data ); // replace with your API URL
  }

}
