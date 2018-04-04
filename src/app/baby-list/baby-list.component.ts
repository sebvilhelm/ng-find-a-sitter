import { Component, OnInit, OnDestroy } from '@angular/core';
import { Baby } from '../entities/baby';
import { UsersActions } from '../users.actions';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store/store';

@Component({
  selector: 'app-baby-list',
  templateUrl: './baby-list.component.html',
  styleUrls: ['./baby-list.component.scss']
})
export class BabyListComponent implements OnInit, OnDestroy {

  private babies: Baby[];
  private subscription;

  constructor(private usersActions: UsersActions, private ngRedux: NgRedux<IAppState>) { }

  deleteBaby(baby: Baby){
   this.usersActions.removeBaby(baby.id);
  }


  ngOnInit() {
    // this.babies = this.data.babies;
    this.subscription = this.ngRedux.select(state => state.users).subscribe(res => {
      console.log(res);
      this.babies = res.babies;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    
  }
  

}
