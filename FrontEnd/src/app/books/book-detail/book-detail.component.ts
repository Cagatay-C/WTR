import { Component, OnInit, Input } from "@angular/core";
import { Book } from "src/app/shared/book.model";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { BookService } from "../book.service";
import { ReadingListService } from "src/app/reading-list/reading-list.service";

@Component({
  selector: "app-book-detail",
  templateUrl: "./book-detail.component.html",
  styleUrls: ["./book-detail.component.css"]
})
export class BookDetailComponent implements OnInit {
  book: Book;
  id: number;
  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private readingService: ReadingListService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"];
      this.book = this.bookService.getBook(this.id);
      console.log(this.book);
    });
  }
  onAddReading() {
    console.log(this.book.bookName + "<=======onAddReading()");
    this.readingService.addBookToReading(this.book);
  }
  onEditBook() {
    this.router.navigate(["edit"], { relativeTo: this.route });
    // this.router.navigate(["../", this.id, "edit"], { relativeTo: this.route });
  }
  onDelete() {
    this.bookService.deleteBook(this.id);
    this.router.navigate(["../"], { relativeTo: this.route });
  }
}
