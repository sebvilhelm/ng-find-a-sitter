import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AdminGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean {
    const url: string = state.url;
    return this.checkIfAdmin(url);
  }

  checkIfAdmin(url: string): boolean {
    if(this.authService.isAdmin) return true;
    
    if(this.authService.isLoggedIn) {
      alert('This section is only for admins!');
    } else {
      this.authService.redirectUrl = url;
      this.router.navigate(['/login']);
    }
    return false;
  }

}
