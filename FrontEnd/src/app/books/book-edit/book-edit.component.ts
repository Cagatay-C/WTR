import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { BookService } from "../book.service";
import { Book } from "src/app/shared/book.model";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { DataStorageService } from "src/app/shared/data-storage.service";

@Component({
  selector: "app-book-edit",
  templateUrl: "./book-edit.component.html",
  styleUrls: ["./book-edit.component.css"]
})
export class BookEditComponent implements OnInit {
  id: number;
  editMode: boolean = false;
  book: Book;
  bookForm: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private router: Router,
    private dataStorage: DataStorageService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"];
      this.editMode = params["id"] != null;
      this.initForm();
    });
  }

  onSubmit() {
    console.log(this.bookForm);
    if (this.editMode) {
      this.bookService.updateBook(this.id, this.bookForm.value);
    } else {
      this.dataStorage.storeBook(this.bookForm.value);
      // this.bookService.addBook(this.bookForm.value);
      console.log(this.bookForm.value);
    }
    this.onCancel();
  }
  onCancel() {
    this.router.navigate(["../"], { relativeTo: this.route });
  }
  private initForm() {
    let bookName = "";
    let bookDescription = "";
    let bookImagePath = "";

    if (this.editMode) {
      const book = (this.book = this.bookService.getBook(this.id));
      bookName = book.bookName;
      bookDescription = book.bookDesc;
      bookImagePath = book.bookUrl;
    }
    this.bookForm = new FormGroup({
      bookName: new FormControl(bookName, Validators.required),
      bookDesc: new FormControl(bookDescription, Validators.required),
      bookUrl: new FormControl(bookImagePath, Validators.required)
    });
  }
}
