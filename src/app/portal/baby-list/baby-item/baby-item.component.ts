import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Baby } from '../../../entities/baby';

@Component({
  selector: 'app-baby-item',
  templateUrl: './baby-item.component.html',
  styleUrls: ['./baby-item.component.scss']
})
export class BabyItemComponent implements OnInit {

  @Input() baby: Baby;
  @Output() babyClicked: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  onClick(baby: Baby) {
    this.babyClicked.emit(baby);
  }

  ngOnInit() {
  }

}
