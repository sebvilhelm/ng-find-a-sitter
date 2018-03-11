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
      if(form.value.typeOfUser === 'baby') {
        const baby: Baby = form.value as Baby;
        // Send a request
        this.data.addBaby(baby);
        this.router.navigate(['/baby-list']);
      } else if(form.value.typeOfUser === 'sitter') {
        const sitter: Sitter = form.value as Sitter;
        this.data.addSitter(sitter);
        this.authService.login(form.value.isAdmin).subscribe(() => {
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
