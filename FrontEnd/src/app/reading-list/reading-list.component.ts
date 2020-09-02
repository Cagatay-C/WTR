import { Component, OnInit } from "@angular/core";
import { Book } from "../shared/book.model";
import { ReadingListService } from "./reading-list.service";

@Component({
  selector: "app-reading-list",
  templateUrl: "./reading-list.component.html",
  styleUrls: ["./reading-list.component.css"]
})
export class ReadingListComponent implements OnInit {
  readingBooks: Book[];

  constructor(private readingService: ReadingListService) {}

  ngOnInit() {
    this.readingService.readingChanged.subscribe(readings => {
      this.readingBooks = readings;
    });
    this.readingBooks = this.readingService.getReadingBooks();
  }
  onDelete(index: number) {
    this.readingService.deleteBook(index);
  }
}
