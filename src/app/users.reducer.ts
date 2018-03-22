import { UsersActions } from './users.actions';
import { UsersState } from './store/store';
import { tassign } from 'tassign';

const INITIAL_STATE: UsersState = {
  isBaby: undefined,
  babies: [],
  sitters: []
};

export function usersReducer(state: UsersState = INITIAL_STATE, action: any) {

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
      // BUG: Returns [object OBJECT]
      const index = state.babies.findIndex(action.payload);
      console.log(index);
      return tassign(state,
        {
          babies: [
            ...state.babies.slice(0,index)
          ]
        });
    default:
      return state;
  }
}
