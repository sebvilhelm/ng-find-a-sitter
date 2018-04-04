import { FormGroup, FormBuilder } from '@angular/forms';
import { Baby } from './../entities/baby';
import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  private user: Baby;
  private editUserForm: FormGroup;

  constructor(private route: ActivatedRoute, private data: DataService, private fb: FormBuilder, private router: Router) {  }

  onSubmit(form: FormGroup) {
    const user = form.value;
    user.birthDate = new Date(user.birthDate);
    this.data.updateBaby(this.user.userName, user);
    this.router.navigate(['/baby-list']);
  }

  onClickDelete(userName: String) {
    this.data.deleteBaby(userName);
    this.router.navigate(['/baby-list']);
  }

  ngOnInit() {
    this.user = this.data.getBaby(this.route.snapshot.params.username);
    const birthDateString: String = this.user.birthDate.toISOString().substring(0, 10);
    this.editUserForm = this.fb.group({
      userName: [this.user.userName],
      firstName: [this.user.firstName],
      lastName: [this.user.lastName],
      birthDate: [birthDateString],
      area: [this.user.area],
    })
  }

}
