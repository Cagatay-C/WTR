import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { AuthComponent } from "./auth/auth.component";
import { ReadingListComponent } from "./reading-list/reading-list.component";
import { ReadingEditComponent } from "./reading-list/reading-edit/reading-edit.component";
import { AppRoutingModule } from "./app-routing.module";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BooksModule } from "./books/books.module";
import { SharedModule } from "./shared/shared.module";
import { CoreModule } from "./core.module";
import { LoadingSpinnerComponent } from "./shared/loading-spinner/loading-spinner.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthComponent,
    ReadingListComponent,
    ReadingEditComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BooksModule,
    SharedModule,
    CoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
