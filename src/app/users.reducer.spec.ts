import { usersReducer } from './users.reducer';
import * as types from './users.actions';

const deepFreeze = require('deep-freeze');

describe('users reducer', () => {

  it('should return the initial state', () => {
    expect(usersReducer(undefined, {}))
      .toEqual({
        isBaby: undefined,
        babies: [],
        sitters: []
      });
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

  it('ADD_BABY - add a baby when there are no babies', () => {
    const babyToAdd = {
      userName: 'oliver',
      firstName: 'Oliver',
      lastName: 'Kirschberg',
      birthDate: new Date(2017,5,17),
      area: 'Greater Copenhagen',
      rating: []
    };
    const stateBefore = {
      isBaby: undefined,
      babies: [],
      sitters: []
    };
    const stateAfter = {
      isBaby: undefined,
      babies: [babyToAdd],
      sitters: []
    };

    deepFreeze(stateBefore);

    expect(usersReducer(stateBefore, {
      type: types.UsersActions.ADD_BABY,
      payload: babyToAdd
    })).toEqual(stateAfter);    
  });
  
  it('ADD_BABY - add a baby when there are already babies', () => {
    const babyBefore = {
      userName: 'elin',
      firstName: 'Elin',
      lastName: 'Skuladottir',
      birthDate: new Date(2012,8,18),
      area: 'Greater Copenhagen',
      rating: []
    };
    const babyToAdd = {
      userName: 'oliver',
      firstName: 'Oliver',
      lastName: 'Kirschberg',
      birthDate: new Date(2017,5,17),
      area: 'Greater Copenhagen',
      rating: []
    };
    const stateBefore = {
      isBaby: undefined,
      babies: [babyBefore],
      sitters: []
    };
    const stateAfter = {
      isBaby: undefined,
      babies: [babyBefore, babyToAdd],
      sitters: []
    };

    deepFreeze(stateBefore);

    expect(usersReducer(stateBefore, {
      type: types.UsersActions.ADD_BABY,
      payload: babyToAdd
    })).toEqual(stateAfter);    
  });
  
  it('ADD_BABY - add a baby when there are already babies', () => {
    const babyBefore = {
      userName: 'elin',
      firstName: 'Elin',
      lastName: 'Skuladottir',
      birthDate: new Date(2012,8,18),
      area: 'Greater Copenhagen',
      rating: []
    };
    const babyToAdd = {
      userName: 'oliver',
      firstName: 'Oliver',
      lastName: 'Kirschberg',
      birthDate: new Date(2017,5,17),
      area: 'Greater Copenhagen',
      rating: []
    };
    const stateBefore = {
      isBaby: undefined,
      babies: [babyBefore],
      sitters: []
    };
    const stateAfter = {
      isBaby: undefined,
      babies: [babyBefore, babyToAdd],
      sitters: []
    };

    deepFreeze(stateBefore);

    expect(usersReducer(stateBefore, {
      type: types.UsersActions.ADD_BABY,
      payload: babyToAdd
    })).toEqual(stateAfter);    
  });

  it('REMOVE_BABY - remove baby from the babies array', () => {
    const babyBefore = {
      userName: 'elin',
      firstName: 'Elin',
      lastName: 'Skuladottir',
      birthDate: new Date(2012,8,18),
      area: 'Greater Copenhagen',
      rating: []
    };
    const stateBefore = {
      isBaby: undefined,
      babies: [babyBefore],
      sitters: []
    };
    const stateAfter = {
      isBaby: undefined,
      babies: [],
      sitters: []
    };

    deepFreeze(stateBefore);

    expect(usersReducer(stateBefore, {
      type: types.UsersActions.REMOVE_BABY,
      payload: babyBefore
    })).toEqual(stateAfter);    

  });

});