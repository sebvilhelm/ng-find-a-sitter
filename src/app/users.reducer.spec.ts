import { usersReducer } from './users.reducer';
import * as types from './users.actions';
import { Baby } from './entities/baby';

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
    const babyToAdd: Baby = {
      id: '1',
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
    const babyBefore: Baby = {
      id: '1',
      userName: 'elin',
      firstName: 'Elin',
      lastName: 'Skuladottir',
      birthDate: new Date(2012,8,18),
      area: 'Greater Copenhagen',
      rating: []
    };
    const babyToAdd: Baby = {
      id: '2',
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
    const babyBefore: Baby = {
      id: '1',
      userName: 'elin',
      firstName: 'Elin',
      lastName: 'Skuladottir',
      birthDate: new Date(2012,8,18),
      area: 'Greater Copenhagen',
      rating: []
    };
    const babyToRemove: Baby = {
      id: '2',
      userName: 'oliver',
      firstName: 'Oliver',
      lastName: 'Kirschberg',
      birthDate: new Date(2017,5,17),
      area: 'Greater Copenhagen',
      rating: []
    };
    const stateBefore = {
      isBaby: undefined,
      babies: [babyBefore,babyToRemove],
      sitters: []
    };
    const stateAfter = {
      isBaby: undefined,
      babies: [babyBefore],
      sitters: []
    };

    deepFreeze(stateBefore);

    expect(usersReducer(stateBefore, {
      type: types.UsersActions.REMOVE_BABY,
      payload: babyToRemove.id
    })).toEqual(stateAfter);  
  });

  it('UPDATE_BABY - update baby in the babies array', () => {
    const babyOne: Baby = {
      id: '1',
      userName: 'elin',
      firstName: 'Elin',
      lastName: 'Skuladottir',
      birthDate: new Date(2012,8,18),
      area: 'Greater Copenhagen',
      rating: []
    };
    const babyBefore: Baby = {
      id: '2',
      userName: 'oliver',
      firstName: 'Oliver',
      lastName: 'Kirschberg',
      birthDate: new Date(2017,5,17),
      area: 'Greater Copenhagen',
      rating: []
    };
    const babyAfter: Baby = {
      id: '2',
      userName: 'oliver',
      firstName: 'Oliver',
      lastName: 'Kirschberg',
      birthDate: new Date(2017,5,17),
      area: 'Holme-Olstrup',
      rating: []
    };
    const stateBefore = {
      isBaby: undefined,
      babies: [babyOne,babyBefore],
      sitters: []
    };
    const stateAfter = {
      isBaby: undefined,
      babies: [babyOne,babyAfter],
      sitters: []
    };

    deepFreeze(stateBefore);

    expect(usersReducer(stateBefore, {
      type: types.UsersActions.UPDATE_BABY,
      payload: {id: 2, baby: babyAfter}
    })).toEqual(stateAfter);
  });

});