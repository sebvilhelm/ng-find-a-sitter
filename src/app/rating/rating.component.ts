import { Component, OnInit, OnDestroy } from '@angular/core';
import { IAppState } from './../store/store';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Baby } from './../entities/baby';
import { NgRedux } from '@angular-redux/store';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { UsersActions } from '../users.actions';
import { Rating } from '../entities/rating';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit, OnDestroy {

  ratingForm: FormGroup;
  ratingValues: Number[] = [1,2,3,4,5];
  baby: Baby;
  subscription: Subscription;

  constructor(private fb: FormBuilder, private ngRedux: NgRedux<IAppState>, private usersActions: UsersActions, private route: ActivatedRoute) { }

  onSubmit(ratingForm: FormGroup) {
    const { value, valid } = ratingForm;
    if(valid) {
      const rating: Rating = value as Rating ;
      this.usersActions.addRating(this.baby._id, rating);
    } else {
      alert('Invalid rating!');
    }
  }

  ngOnInit() {
    this.ratingForm = this.fb.group({
      rating: [null, Validators.required],
      comment: ['', Validators.required]
    });

    this.subscription = this.ngRedux.select(state => state.users.babies).subscribe(res => {
      this.baby = res.find(baby => baby._id === this.route.snapshot.params.id);
      console.log(this.baby);
    })

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
