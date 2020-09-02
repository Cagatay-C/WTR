import { NgModule } from "@angular/core";
import { BooksComponent } from "./books.component";
import { BookDetailComponent } from "./book-detail/book-detail.component";
import { BookEditComponent } from "./book-edit/book-edit.component";
import { BookItemComponent } from "./book-list/book-item/book-item.component";
import { BookListComponent } from "./book-list/book-list.component";
import { BookStartComponent } from "./book-start/book-start.component";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

import { BooksRoutingModule } from "./books-routing.module";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    BooksComponent,
    BookDetailComponent,
    BookEditComponent,
    BookItemComponent,
    BookListComponent,
    BookStartComponent
  ],
  imports: [
    RouterModule,
    ReactiveFormsModule,
    SharedModule,
    BooksRoutingModule
  ],
  exports: [
    BooksComponent,
    BookDetailComponent,
    BookEditComponent,
    BookItemComponent,
    BookListComponent,
    BookStartComponent
  ]
})
export class BooksModule {}
