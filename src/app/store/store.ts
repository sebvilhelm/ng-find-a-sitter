import { routerReducer } from '@angular-redux/router';
import { combineReducers } from 'redux';
import { usersReducer } from './../users.reducer';
import { Baby } from '../entities/baby';
import { Sitter } from '../entities/sitter';

export class UsersState {

  isBaby: boolean;
  babies: Baby[];
  sitters: Sitter[];

}

export class IAppState {

  users?: UsersState;

}

export const rootState: IAppState = {};

export const rootReducer = combineReducers<IAppState>({

  users: usersReducer,

  router: routerReducer

});
