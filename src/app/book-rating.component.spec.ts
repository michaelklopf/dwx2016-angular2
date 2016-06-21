import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { BookRatingAppComponent } from '../app/book-rating.component';

beforeEachProviders(() => [BookRatingAppComponent]);

describe('App: BookRating', () => {
  it('should create the app',
      inject([BookRatingAppComponent], (app: BookRatingAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'book-rating works!\'',
      inject([BookRatingAppComponent], (app: BookRatingAppComponent) => {
    expect(app.title).toEqual('book-rating works!');
  }));
});
