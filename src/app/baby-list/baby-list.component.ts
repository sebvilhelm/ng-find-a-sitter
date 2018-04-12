import { UsersService } from './../users.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Baby } from '../entities/baby';
import { UsersActions } from '../users.actions';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store/store';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-baby-list',
  templateUrl: './baby-list.component.html',
  styleUrls: ['./baby-list.component.scss']
})
export class BabyListComponent implements OnInit, OnDestroy {

  private babies: Baby[];
  private subscription: Subscription;

  constructor(private usersActions: UsersActions, private ngRedux: NgRedux<IAppState>, private usersService:UsersService) { }

  deleteBaby(baby: Baby){
   this.usersActions.removeBaby(baby.id);
  }


  ngOnInit() {
    this.subscription = this.ngRedux.select(state => state.users).subscribe(res => {
      this.babies = res.babies;
    });
    this.usersService.getSitters().subscribe((res: any[]) => {
      const items = res.filter(item => item.customerId === '1');
      console.log(items);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    
  }
  

}
