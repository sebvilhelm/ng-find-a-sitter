import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-baby',
  templateUrl: './register-baby.component.html',
  styleUrls: ['./register-baby.component.scss']
})
export class RegisterBabyComponent implements OnInit {
  
  registerBabyForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerBabyForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birthDate: ['', Validators.required],
      area: ['', Validators.required],
    });
  }

  onSubmit(form) {
    if(form.valid) {
      // Send a request
    } else {
      // Error handling
    }
  }

  ngOnInit() {
  }

}
