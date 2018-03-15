import { DataService } from './../../data.service';
import { Component, OnInit } from '@angular/core';
import { Baby } from '../../entities/baby';

@Component({
  selector: 'app-baby-list',
  templateUrl: './baby-list.component.html',
  styleUrls: ['./baby-list.component.scss']
})
export class BabyListComponent implements OnInit {

  private babies: Baby[];

  constructor(private data: DataService) { }

  onBabyClick(baby) {
    console.log(baby);
  }


  ngOnInit() {
    this.babies = this.data.babies;
  }

}
