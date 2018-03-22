import { routerReducer } from '@angular-redux/router';
import { combineReducers } from 'redux';
import { registerReducer } from './../register/register.reducer';

export class RegisterState {

  isBaby: boolean;

}

export class IAppState {

  register?: RegisterState;

}

export const rootReducer = combineReducers<IAppState>({

  register: registerReducer,

  router: routerReducer

});
