import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'book-rating-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public books: string[];

  constructor() {}

  ngOnInit() {
    this.books = ['Angular 2', 'AngularJS'];
  }

}
