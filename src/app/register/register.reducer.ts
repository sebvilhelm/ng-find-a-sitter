import { RegisterActions } from './register.actions';
import { RegisterState } from '../store/store';
import { tassign } from 'tassign';

const INITIAL_STATE: RegisterState = { isBaby: undefined };

export function registerReducer(state: RegisterState = INITIAL_STATE, action: any) {

  switch (action.type) {
    case RegisterActions.SET_TYPE:
      return tassign(state, { isBaby: action.payload });
    default:
      return state;
  }

}
