import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'book-rating-book',
  templateUrl: 'book.component.html',
  styleUrls: ['book.component.css']
})
export class BookComponent implements OnInit {
  @Input() book: Book;

  constructor() {}

  rateUp() {
    this.book.rateUp();
  }

  rateDown() {
    this.book.rateDown();
  }

  ngOnInit() {
  }

}
