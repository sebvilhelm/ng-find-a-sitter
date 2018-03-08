import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthService {
  public isLoggedIn = false;
  public isAdmin = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login(isAdmin: boolean): Observable<boolean> {
    return Observable
      .of(true)
      .delay(1000)
      .do(
        val => {
          this.isAdmin = isAdmin;
          this.isLoggedIn = true;
        }
      );
  }

  logout(): void {
    this.isLoggedIn = false;
    this.isAdmin = false;
  }
}