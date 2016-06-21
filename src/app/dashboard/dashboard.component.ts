import { Component, OnInit } from '@angular/core';
import { BookComponent } from '../book';
import { Book } from '../shared'

@Component({
  moduleId: module.id,
  selector: 'book-rating-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
  directives: [BookComponent]
})
export class DashboardComponent implements OnInit {
  public books: Book[];

  constructor() {}

  ngOnInit() {
    this.books = [
      new Book('Angular 2', 'Super geiles Buch'),
      new Book('ReactJS', 'auch nicht schlecht')
    ];
  }

}
