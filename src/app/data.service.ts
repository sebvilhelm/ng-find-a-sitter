import { Injectable } from '@angular/core';
import { Baby } from './entities/baby';
import { Sitter } from './entities/sitter';

@Injectable()
export class DataService {

  // Call to a web service to get data
  // Use dummy data until we do that
  babies: Baby[] = [
    {
      id: 1,
      userName: 'oliver',
      firstName: 'Oliver',
      lastName: 'Kirschberg',
      birthDate: new Date(2017,5,17),
      area: 'Greater Copenhagen',
      rating: []
    },
    {
      id: 2,
      userName: 'elin',
      firstName: 'Elin',
      lastName: 'Skuladottir',
      birthDate: new Date(2012,8,18),
      area: 'Greater Copenhagen',
      rating: []
    },
  ]

  sitters: Sitter[] = [
    {
      id: 3,
      userName: 'death-metal',
      firstName: 'Christian',
      lastName: 'Kirschberg',
      birthDate: new Date(1979,1,1),
      area: 'Greater Copenhagen',
      rating: [],
      gender: 'Male',
      rate: 70,
      workAreas: ['Greater Copenhagen','Sealand'],
      isAdmin: false
    }
  ]

  constructor() { }

  public addBaby(baby: Baby) {
    this.babies.push(baby);
  }
  
  public addSitter(sitter: Sitter) {
    this.sitters.push(sitter);
  }

  public getBaby(userName: String) {
    return this.babies.find(baby => baby.userName === userName);
  }

  public updateBaby(userName: String, baby: Baby) {
    const index = this.babies.findIndex(baby => baby.userName === userName);
    this.babies[index] = baby;
  }

  public deleteBaby(userName: String) {
    const index = this.babies.findIndex(baby => baby.userName === userName);
    this.babies.splice(index, 1);
  }

}
