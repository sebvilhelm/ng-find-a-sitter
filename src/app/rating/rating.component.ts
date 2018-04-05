import { Subscription } from 'rxjs/Subscription';
import { IAppState } from './../store/store';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Baby } from './../entities/baby';
import { NgRedux } from '@angular-redux/store';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit, OnDestroy {

  private ratingForm: FormGroup;
  private ratingValues: Number[] = [1,2,3,4,5];
  private baby: Baby;
  private subscription: Subscription;

  constructor(private fb: FormBuilder, private ngRedux: NgRedux<IAppState>, private route: ActivatedRoute) { }

  onSubmit(ratingForm: FormGroup) {
    const { value } = ratingForm;
    console.log(value);
  }

  ngOnInit() {
    this.ratingForm = this.fb.group({
      rating: [null, Validators.required],
      comment: ['']
    });

    this.subscription = this.ngRedux.select(state => state.users.babies).subscribe(res => {
      this.baby = res.find(baby => baby.id === this.route.snapshot.params.id);
    })

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
