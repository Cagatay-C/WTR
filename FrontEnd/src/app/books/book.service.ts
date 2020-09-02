import { Book } from "../shared/book.model";
import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class BookService {
  booksChanged = new Subject<Book[]>();
  private books: Book[] = [];

  constructor(private http: HttpClient) {}
  // private books: Book[] = [
  //   new Book(
  //     "Idiot",
  //     "Fantastic Book!",
  //     "https://4.bp.blogspot.com/-NhRq5Zux-yo/Vs87nmTjm3I/AAAAAAAABtU/8VZ27W485Pc/s600/42.jpg"
  //   ),

  //   new Book(
  //     "The Count of Monte Cristo",
  //     "Story of revenge!",
  //     "https://images-na.ssl-images-amazon.com/images/I/71HH78NM3PL.jpg"
  //   )
  // ];

  getBooks() {
    return this.books.slice();
  }

  setBooks(books: Book[]) {
    this.books = books;
    this.booksChanged.next(this.books.slice());
  }

  getBook(id: number) {
    return this.books[id];
  }

  updateBook(index: number, book: Book) {
    this.books[index] = book;
    this.booksChanged.next(this.books.slice());
  }

  addBook(book: Book) {
    this.books.push(book);
    this.booksChanged.next(this.books.slice());
  }

  deleteBook(index: number) {
    this.books.splice(index, 1);
    this.booksChanged.next(this.books.slice());
  }
}
