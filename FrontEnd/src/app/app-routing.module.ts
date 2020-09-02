import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ReadingListComponent } from "./reading-list/reading-list.component";
import { AuthComponent } from "./auth/auth.component";
import { AuthGuard } from "./auth/auth.guard";

const appRoutes: Routes = [
  {
    path: "",
    redirectTo: "/books",
    pathMatch: "full"
  },
  {
    path: "books",
    loadChildren: "./books/books.module#BooksModule",
    canActivate: [AuthGuard]
  },
  {
    path: "reading-list",
    component: ReadingListComponent,
    canActivate: [AuthGuard]
  },
  { path: "auth", component: AuthComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
