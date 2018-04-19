import { Injectable } from '@angular/core';
import { UsersService } from './users.service';
import { ActionsObservable } from "redux-observable";
import { UsersActions } from "./users.actions";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Baby } from './entities/baby';
import { Router } from '@angular/router';

@Injectable()
export class UsersEpic {
  constructor(private usersService: UsersService, private router: Router) {}

  getUsers = (action$: ActionsObservable<any>) => {
    return action$.ofType(UsersActions.GET_USERS) // Listen for this action
      .mergeMap(({payload}) => { // payload
          return this.usersService.getUsers()
            .map((result: any[]) => ({ // when web service responds with success, call this action with payload that came back from webservice
              type: UsersActions.RECEIVED_USERS,
              payload: result.filter(item => item.customerId === 'Seb')
            }))
            .catch(error => Observable.of({ // when web service responds with failure, call this action with payload that came back from webservice
              type: UsersActions.FAILED_RECEIVED_USERS,
              payload: error
          }));
    });
  }

  addBaby = (action$: ActionsObservable<any>) => {
    return action$.ofType(UsersActions.ADD_BABY_TO_WS)
      .mergeMap(({payload}) => {
        return this.usersService.createBaby(payload)
          .map((result: Baby) =>{
            this.router.navigate(['/baby-list']);
            return ({
            type: UsersActions.ADD_BABY,
            payload: result._id
          })})
          .catch(error => Observable.of({
            type: UsersActions.FAILED_ADD_BABY_TO_WS,
            payload: error
          }))
      })
  }

  removeBaby = (action$: ActionsObservable<any>) => {
    return action$.ofType(UsersActions.REMOVE_BABY_FROM_WS)
      .mergeMap(({payload}) => {
        return this.usersService.deleteBaby(payload)
          .map((result: String) =>{
            return ({
            type: UsersActions.REMOVE_BABY,
            payload: payload._id
          })})
          .catch(error => Observable.of({
            type: UsersActions.FAILED_REMOVE_BABY_FROM_WS,
            payload: error
          }))
      })
  }

  // TODO: Update baby
}