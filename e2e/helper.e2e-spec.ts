import { element, by } from 'protractor';

export class Helper {
  
}

export class BabyListHelper extends Helper {
  static getNumberOfUsers() {
    return new Promise<any>((resolve, reject) => {
      element.all(by.css('#babyList li'))
        .then(el => {
          if(el.length) {
            resolve(el.length); 
          } else {
            reject('There were no babies');
          } 
        });
    });
  }
}