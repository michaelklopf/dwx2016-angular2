export class BookRatingPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('book-rating-app h1')).getText();
  }
}
