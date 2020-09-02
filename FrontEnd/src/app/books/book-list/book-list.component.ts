import { Component, OnInit, OnDestroy } from "@angular/core";
import { Book } from "../../shared/book.model";
import { BookService } from "../book.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { DataStorageService } from "src/app/shared/data-storage.service";

@Component({
  selector: "app-book-list",
  templateUrl: "./book-list.component.html",
  styleUrls: ["./book-list.component.css"]
})
export class BookListComponent implements OnInit, OnDestroy {
  books: Book[] = [];
  subscription: Subscription;
  constructor(
    private bookService: BookService,
    private router: Router,
    private route: ActivatedRoute,
    private dataStorage: DataStorageService
  ) {}

  ngOnInit() {
    this.subscription = this.bookService.booksChanged.subscribe(
      (books: Book[]) => (this.books = books)
    );
    this.dataStorage.fetchBooks().subscribe(books => {
      this.bookService.setBooks(books);
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  onNewBook() {
    this.router.navigate(["new"], { relativeTo: this.route });
  }
}
