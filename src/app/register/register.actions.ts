import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store/store';

@Injectable()
export class RegisterActions {
  constructor(private ngRedux: NgRedux<IAppState>) { }

  static SET_TYPE: string = 'SET_TYPE';

  setType(isBaby: boolean): void {
    console.log('in action', isBaby);
    this.ngRedux.dispatch({
      type: RegisterActions.SET_TYPE,
      payload: isBaby
    });
  }
}
