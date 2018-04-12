import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UsersService {

  constructor(private http: HttpClient) { } 

  getSitters() {
    return this.http.get('http://angular2api1.azurewebsites.net/api/internships/getAll');
  }

}
