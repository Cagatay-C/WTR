import { Book } from "../shared/book.model";
import { Subject } from "rxjs";

export class ReadingListService {
  readingChanged = new Subject<Book[]>();
  readingBooks: Book[] = [];

  addBookToReading(book: Book) {
    if (this.readingBooks !== undefined) this.readingBooks.push(book);
    else console.log("undefined");
  }
  getReadingBooks() {
    return this.readingBooks.slice();
  }
  deleteBook(index: number) {
    this.readingBooks.splice(index, 1);
    this.readingChanged.next(this.readingBooks.slice());
  }
}
