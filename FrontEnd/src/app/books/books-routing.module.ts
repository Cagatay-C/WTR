import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BooksComponent } from "./books.component";
import { BookStartComponent } from "./book-start/book-start.component";
import { BookEditComponent } from "./book-edit/book-edit.component";
import { BookDetailComponent } from "./book-detail/book-detail.component";

const routes: Routes = [
  {
    path: "",
    component: BooksComponent,
    children: [
      { path: "", component: BookStartComponent },
      { path: "new", component: BookEditComponent },
      { path: ":id", component: BookDetailComponent },
      { path: ":id/edit", component: BookEditComponent }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule {}
