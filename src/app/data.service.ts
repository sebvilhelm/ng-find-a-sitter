import { Injectable } from '@angular/core';
import { Baby } from './entities/baby';
import { Sitter } from './entities/sitter';

@Injectable()
export class DataService {

  // Call to a web service to get data
  // Use dummy data until we do that
  babies: Baby[] = [
    {
      userName: 'oliver',
      firstName: 'Oliver',
      lastName: 'Kirschberg',
      birthDate: new Date(2017,5,17),
      area: 'Greater Copenhagen',
      rating: []
    },
    {
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
    /* for(let i=0; i<this.babies.length; i++) {
      if(this.babies[i].userName === userName) {
        return this.babies[i];
      }
    } */
  }

  public updateBaby(userName: String, baby: Baby) {
    for(let i=0; i<this.babies.length; i++) {
      if(this.babies[i].userName === userName) {
        this.babies[i] = baby;
        return this.babies[i];
      }
    }
  }

  public deleteBaby(userName: String) {
    // return this.babies.find(baby => baby.userName === userName);
    for(let i=0; i<this.babies.length; i++) {
      if(this.babies[i].userName === userName) {
        this.babies.splice(i,1);
        return this.babies;
      }
    }
  }

}
