import { DataService } from './../data.service';
import { Baby } from './../entities/baby';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list-test',
  templateUrl: './user-list-test.component.html',
  styleUrls: ['./user-list-test.component.scss']
})
export class UserListTestComponent implements OnInit {

  private babies: Baby[];

  constructor(private data: DataService) { }

  ngOnInit() {
    this.babies = this.data.babies
  }

}
