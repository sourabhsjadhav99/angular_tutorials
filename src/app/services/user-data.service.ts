import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  constructor() {}
  users() {
    return [
      { name: 'John', email: 'john@example.com', phone: '123456' },
      { name: 'Joe', email: 'Joe@example.com', phone: '123456' },
      { name: 'Jane', email: 'jane@example.com', phone: '123456' },
      { name: 'Mark', email: 'mark@example.com', phone: '123456' },
      { name: 'Mary', email: 'mary@example.com', phone: '123456' },
      { name: 'Mike', email: 'mike@example.com', phone: '123456' },
    ];
  }
}
