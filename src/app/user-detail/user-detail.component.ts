import { FormGroup, FormBuilder } from '@angular/forms';
import { Baby } from './../entities/baby';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersActions } from '../users.actions';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store/store';
import { tassign } from 'tassign';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit, OnDestroy {

  private user: Baby;
  private editUserForm: FormGroup;
  private subscription;

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private router: Router, private usersActions: UsersActions, private ngRedux: NgRedux<IAppState>) {  }

  onSubmit(form: FormGroup) {
    let user = form.value;
    user.birthDate = new Date(user.birthDate);
    user = tassign(this.user, user);
    
    this.usersActions.updateBaby(this.user.id, user);
    this.router.navigate(['/baby-list']);
  }

  onClickDelete(userName: String) {
    this.usersActions.removeBaby(this.user.id);
    this.router.navigate(['/baby-list']);
  }

  ngOnInit() {
    this.subscription = this.ngRedux.select(state => state.users).subscribe(res => {
      this.user = res.babies.find(baby => baby.id === this.route.snapshot.params.id);

      if(!this.user) {
        this.router.navigate(['/baby-list']);
        return;
      }

      const birthDateString: String = this.user.birthDate.toISOString().substring(0, 10);
      this.editUserForm = this.fb.group({
        userName: [this.user.userName],
        firstName: [this.user.firstName],
        lastName: [this.user.lastName],
        birthDate: [birthDateString],
        area: [this.user.area],
      });
    });
    

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
