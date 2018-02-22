import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = FormGroup.prototype;
  constructor(private fb: FormBuilder, private router: Router) { 
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onSubmit(loginForm) {
    if(loginForm.valid) {
      // Send a request

      // Navigate to the home page
      this.router.navigate(['home']);
    } else {
      // Error handling
    }
  }

  ngOnInit() {
  }

}
