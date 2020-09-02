import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Book } from "src/app/shared/book.model";
import { BookService } from "../../book.service";

@Component({
  selector: "app-book-item",
  templateUrl: "./book-item.component.html",
  styleUrls: ["./book-item.component.css"]
})
export class BookItemComponent implements OnInit {
  @Input() book: Book;
  @Input() index: number;

  constructor(private bookService: BookService) {}

  ngOnInit() {}
}
