import { Rating } from './entities/rating';
import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from './store/store';
import { Baby } from './entities/baby';

@Injectable()
export class UsersActions {
  constructor(private ngRedux: NgRedux<IAppState>) { }

  static SET_TYPE: string = 'SET_TYPE';
  static GET_USERS: string = 'GET_USERS';
  static RECEIVED_USERS: string = 'RECEIVED_USERS';
  static FAILED_RECEIVED_USERS: string = 'FAILED_RECEIVED_USERS';
  static ADD_BABY: string = 'ADD_BABY';
  static REMOVE_BABY: string = 'REMOVE_BABY';
  static UPDATE_BABY: string = 'UPDATE_BABY';
  static ADD_RATING: string = 'ADD_RATING';
  static ADD_BABY_TO_WS: string = 'ADD_BABY_TO_WS';
  static FAILED_ADD_BABY_TO_WS: string = 'FAILED_ADD_BABY_TO_WS';

  setType(isBaby: boolean): void {
    this.ngRedux.dispatch({
      type: UsersActions.SET_TYPE,
      payload: isBaby
    });
  }

  getUsers(): void {
    this.ngRedux.dispatch({
      type: UsersActions.GET_USERS
    });
  }

  addBaby(baby: Baby): void {
    this.ngRedux.dispatch({
      type: UsersActions.ADD_BABY_TO_WS,
      payload: baby
    });
  }

  removeBaby(id: String): void {
    this.ngRedux.dispatch({
      type: UsersActions.REMOVE_BABY,
      payload: id
    });
  }

  updateBaby(id: String, baby: Baby): void {
    this.ngRedux.dispatch({
      type: UsersActions.UPDATE_BABY,
      payload: {id, baby}
    });
  }

  addRating(id: String, rating: Rating): void {
    this.ngRedux.dispatch({
      type: UsersActions.ADD_RATING,
      payload: { id, rating }
    });
  }
}
