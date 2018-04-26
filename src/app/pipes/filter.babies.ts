import {Injectable, Pipe, PipeTransform} from '@angular/core';
import {Baby} from '../entities/baby';

@Pipe({name: 'filterBabies'})
@Injectable()
export class FilterBabies implements PipeTransform {
  transform(items: Baby[], args: String) {
    if(args && items.length > 0) {
      const filteredItems = items.filter(item => 
        item.firstName && item.firstName.toLowerCase().includes(args.toLowerCase())
        ||item.lastName && item.lastName.toLowerCase().includes(args.toLowerCase())
        ||item.userName && item.userName.toLowerCase().includes(args.toLowerCase())
        ||item.rating.length > 0 && Math.round((item.rating.reduce((sum, {rating}) => sum+ rating, 0))/item.rating.length) === Number(args)
      );
      return filteredItems;
    }
    return items;
  }
}
