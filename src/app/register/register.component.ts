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

  constructor(private fb: FormBuilder, private data: DataService, private router: Router) {
    this.registerForm = this.fb.group({
      userName: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birthDate: ['', Validators.required],
      area: ['', Validators.required],
      gender: ['', Validators.required],
      rate: [0, Validators.required]
    });
  }

  onSubmit(form) {
    /* Find current age */
    var dob = form.value.birthDate
    var today = new Date()
    var birthDate = new Date(dob)
    var age = today.getFullYear() - birthDate.getFullYear()
    var m = today.getMonth() - birthDate.getMonth()
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--
    }
    if(form.valid) {
      const baby: Baby = form.value as Baby;
      // Send a request
      this.data.addBaby(baby);
      this.router.navigate(['/portal/baby-list']);

    } else {
      // Error handling
    }
  }

  ngOnInit() {
  }

}
