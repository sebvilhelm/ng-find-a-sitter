import { Router } from '@angular/router';
import { DataService } from './../../data.service';
import { Component, OnInit } from '@angular/core';
import { Baby } from '../../entities/baby';

@Component({
  selector: 'app-baby-list',
  templateUrl: './baby-list.component.html',
  styleUrls: ['./baby-list.component.scss']
})
export class BabyListComponent implements OnInit {

  private babies: Baby[] = this.data.babies;

  constructor(private data: DataService, private router: Router) { }

  onClick(userName: String) {
    console.log('clicked on baby',userName);
    this.router.navigate(['/portal/user-detail',userName])
  }

  ngOnInit() {
  }

}
