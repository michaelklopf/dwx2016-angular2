import { Component } from '@angular/core';
import { DashboardComponent } from './dashboard';

@Component({
  moduleId: module.id,
  selector: 'book-rating-app',
  templateUrl: 'book-rating.component.html',
  styleUrls: ['book-rating.component.css'],
  directives: [DashboardComponent]
})
export class BookRatingAppComponent {
  
}
