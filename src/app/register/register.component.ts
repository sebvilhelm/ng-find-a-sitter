import { AuthService } from './../auth.service';
import { Router } from '@angular/router';
import { Sitter } from './../entities/sitter';
import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Baby } from '../entities/baby';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  private registerForm: FormGroup;

  constructor(private fb: FormBuilder, private data: DataService, private router: Router, private authService: AuthService) {
  }

  onSubmit(form) {
    if(form.valid) {
      const user = form.value;
      user.birthDate = new Date(user.birthDate);
      if(user.typeOfUser === 'baby') {
        const baby: Baby = user as Baby;
        // Send a request
        this.data.addBaby(baby);
        this.router.navigate(['/baby-list']);
      } else if(user.typeOfUser === 'sitter') {
        const sitter: Sitter = user as Sitter;
        this.data.addSitter(sitter);
        this.authService.login(user.isAdmin).subscribe(() => {
          this.router.navigate(['/portal']);
        });
      }

    } else {
      // Error handling
      alert('The form is invalid!');
    }
  }

  findAge(form) {
    /* Find current age */
    var dob = form.value.birthDate
    var today = new Date()
    var birthDate = new Date(dob)
    var age = today.getFullYear() - birthDate.getFullYear()
    var m = today.getMonth() - birthDate.getMonth()
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--
    }
  }

  ngOnInit() {
    this.registerForm = this.fb.group({
      userName: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birthDate: ['', Validators.required],
      area: ['', Validators.required],
      gender: ['', Validators.required],
      rate: [0, Validators.required],
      typeOfUser: 'baby',
      isAdmin: false
    });
  }

}
