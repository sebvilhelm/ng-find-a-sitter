import { AuthService } from './auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private authService: AuthService) {}
  title = 'FindASitter';
  // How do you update this if the state changes? ((Subscription?!))
  isLoggedIn = this.authService.isLoggedIn;
}
