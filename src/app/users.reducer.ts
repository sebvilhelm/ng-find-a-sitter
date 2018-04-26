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
    case UsersActions.GET_USERS:
      return state; // Set a loading state, maybe?
    case UsersActions.FAILED_RECEIVED_USERS:
      return state; // Handle error
    case UsersActions.RECEIVED_USERS:
      return tassign(state, {babies: action.payload});
    case UsersActions.ADD_BABY_TO_WS:
      return state; // Set a loading state, maybe?
    case UsersActions.FAILED_ADD_BABY_TO_WS:
      return state; // Handle error
    case UsersActions.REMOVE_BABY_FROM_WS:
      return state; // Set a loading state, maybe?
    case UsersActions.FAILED_REMOVE_BABY_FROM_WS:
      return state; // Handle error
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
      index = state.babies.findIndex(baby => baby._id === action.payload);
      return tassign(state,
        {
          babies: [
            ...state.babies.slice(0,index),
            ...state.babies.slice(index+1)
          ]
        });
    case UsersActions.UPDATE_BABY:
      index = state.babies.findIndex(baby => baby._id === action.payload._id);
      return tassign(state,
        {
          babies: [
            ...state.babies.slice(0,index),
            action.payload,
            ...state.babies.slice(index+1)
          ]
        });
    
    // case UsersActions.ADD_RATING:
    //   index = state.babies.findIndex(baby => baby._id === action.payload.id);
    //   const baby = state.babies[index];
    //   const babyCopy = tassign(baby, { rating: [...baby.rating, action.payload.rating] });
    //   return tassign(state, {
    //     babies: [
    //       ...state.babies.slice(0, index),
    //       babyCopy,
    //       ...state.babies.slice(index+1)
    //     ]
    //   });
    default:
      return state;
  }
}