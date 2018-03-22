import { usersReducer } from './users.reducer';
import * as types from './users.actions';

const deepFreeze = require('deep-freeze');

describe('users reducer', () => {

  it('should return the initial state', () => {
    expect(usersReducer(undefined, {})).toEqual({ isBaby: undefined });
  });

  it('TOGGLE_LESSON - selecting active lessons - last', () => {
    const stateBefore = {
      isBaby: undefined,
      babies: [],
      sitters: []
    };

    const stateAfter = {
      isBaby: true,
      babies: [],
      sitters: []
    };
    
    deepFreeze(stateBefore);

    expect(usersReducer(stateBefore, {
      type: types.UsersActions.SET_TYPE,
      payload: true
    })).toEqual(stateAfter);

  });

});