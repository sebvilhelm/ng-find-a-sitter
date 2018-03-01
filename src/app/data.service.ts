import { Injectable } from '@angular/core';
import { Baby } from './entities/baby';
import { Sitter } from './entities/sitter';

@Injectable()
export class DataService {

  // Call to a web service to get data
  // Use dummy data until we do that
  babies: Baby[] = [
    {
      firstName: 'Oliver',
      lastName: 'Kirschberg',
      birthDate: new Date(2017,5,17),
      area: 'Greater Copenhagen',
      rating: []
    },
    {
      firstName: 'Elin',
      lastName: 'Skuladottir',
      birthDate: new Date(2012,8,18),
      area: 'Greater Copenhagen',
      rating: []
    },
  ]

  sitters: Sitter[] = [
    {
      firstName: 'Christian',
      lastName: 'Kirschberg',
      birthDate: new Date(1979,1,1),
      area: 'Greater Copenhagen',
      rating: [],
      gender: 'Male',
      rate: 70,
      workAreas: ['Greater Copenhagen','Sealand']
    }
  ]

  constructor() { }

  public addBaby(baby: Baby) {
    this.babies.push(baby);
  }
  
  public addSitter(sitter: Sitter) {
    this.sitters.push(sitter);
  }

}
