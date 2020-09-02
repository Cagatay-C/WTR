import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Book } from "./book.model";

@Injectable()
export class DataStorageService {
  constructor(private http: HttpClient) {}

  // storeBooks() {
  //   const books = this.bookService.getBooks();
  //   this.http.post("", books).subscribe(response => {
  //     console.log(response);
  //   });
  // }

  fetchBooks() {
    return this.http.get<Book[]>("/api/books");
  }

  storeBook(theBook: Book) {
    this.http.post("/api/books", theBook).subscribe(response => {
      console.log(response);
    });
  }
}
