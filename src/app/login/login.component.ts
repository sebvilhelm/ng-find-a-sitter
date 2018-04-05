import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) { 
  }

  onSubmit(loginForm: FormGroup) {
    if(loginForm.valid) {
      const userIsAdmin = loginForm.value.isAdmin;
      // Send a request
      this.authService.login(userIsAdmin).subscribe(() => {
        const url = this.authService.redirectUrl ? this.authService.redirectUrl : 'home';
        // Navigate to route
        this.router.navigate([url]);
      });
    } else {
      // Error handling
    }
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      isAdmin: false
    });
  }

}
