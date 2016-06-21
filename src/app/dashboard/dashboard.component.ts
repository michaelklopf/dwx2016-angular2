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

  add(title, description) {
    this.books.push(new Book(title.value, description.value));
    title.value = description.value = '';
    //console.log("Hello", title.value, description.value);
  }

  sort(book: Book) {
    this.books.sort((a, b) => b.rating - a.rating);
  }

  ngOnInit() {
    this.books = [
      new Book('Angular 2', 'Super geiles Buch', 1),
      new Book('ReactJS', 'auch nicht schlecht')
    ];
  }

}
