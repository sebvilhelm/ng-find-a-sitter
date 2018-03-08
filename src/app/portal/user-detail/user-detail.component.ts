import { FormGroup, FormBuilder } from '@angular/forms';
import { Baby } from './../../entities/baby';
import { DataService } from './../../data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  private user: Baby = this.data.getBaby(this.route.snapshot.params.username);
  private editUserForm: FormGroup;

  constructor(private route: ActivatedRoute, private data: DataService, private fb: FormBuilder, private router: Router) {
    this.editUserForm = this.fb.group({
      userName: [this.user.userName],
      firstName: [this.user.firstName],
      lastName: [this.user.lastName],
      birthDate: [this.user.birthDate],
      area: [this.user.area],
    })
  }

  onSubmit(form: FormGroup) {
    this.data.updateBaby(this.user.userName, form.value);
    this.router.navigate(['/portal/baby-list']);
  }

  onClickDelete(userName: String) {
    this.data.deleteBaby(userName);
    this.router.navigate(['/portal/baby-list']);
  }

  ngOnInit() {
  }

}
