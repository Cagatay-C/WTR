import { NgModule } from "@angular/core";
import { ReadingListService } from "./reading-list/reading-list.service";
import { BookService } from "./books/book.service";
import { DataStorageService } from "./shared/data-storage.service";
import { AuthService } from "./auth/auth.service";
import { UserService } from "./shared/user.service";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { JwtInterceptor } from "./shared/jwt.interceptor";
import { ErrorInterceptor } from "./shared/error.interceptor";
import { AuthGuard } from "./auth/auth.guard";

@NgModule({
  providers: [
    ReadingListService,
    BookService,
    DataStorageService,
    AuthService,
    UserService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    AuthGuard
  ]
})
export class CoreModule {}
