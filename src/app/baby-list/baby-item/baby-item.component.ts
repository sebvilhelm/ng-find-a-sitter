import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Baby } from '../../entities/baby';

@Component({
  selector: 'app-baby-item',
  templateUrl: './baby-item.component.html',
  styleUrls: ['./baby-item.component.scss']
})
export class BabyItemComponent implements OnInit {
  @Input() baby: Baby;
  @Output() babyDeleteClicked: EventEmitter<any> = new EventEmitter<any>();

  averageRating: Number = 0;

  constructor() { }


  deleteBaby(){
    this.babyDeleteClicked.emit(this.baby);
  }

  ngOnInit() {
    if(this.baby.rating.length > 0) this.averageRating = this.baby.rating.reduce((sum, rating) => sum + rating.rating , 0) / this.baby.rating.length ;
  }

}
