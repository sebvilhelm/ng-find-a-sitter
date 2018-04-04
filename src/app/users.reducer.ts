import { UsersActions } from './users.actions';
import { UsersState } from './store/store';
import { tassign } from 'tassign';

const INITIAL_STATE: UsersState = {
  isBaby: undefined,
  babies: [],
  sitters: []
};

export function usersReducer(state: UsersState = INITIAL_STATE, action: any) {

  let index;

  switch (action.type) {
    case UsersActions.SET_TYPE:
      return tassign(state, { isBaby: action.payload });
    case UsersActions.ADD_BABY:
      return tassign(state,
        {
          babies: [
            ...state.babies,
            action.payload
          ]
        });
    case UsersActions.REMOVE_BABY:
      index = state.babies.findIndex(baby => baby.id === action.payload);
      return tassign(state,
        {
          babies: [
            ...state.babies.slice(0,index),
            ...state.babies.slice(index+1)
          ]
        });
    case UsersActions.UPDATE_BABY:
        index = state.babies.findIndex(baby => baby.id === action.payload.id);
        return tassign(state,
          {
            babies: [
              ...state.babies.slice(0,index),
              action.payload.baby,
              ...state.babies.slice(index+1)
            ]
          });
    default:
      return state;
  }
}
