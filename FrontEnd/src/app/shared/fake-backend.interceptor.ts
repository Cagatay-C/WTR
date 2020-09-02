import { User } from "./user.model";
import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
  HTTP_INTERCEPTORS
} from "@angular/common/http";
import { Observable, of, throwError } from "rxjs";
import { mergeMap, materialize, delay, dematerialize } from "rxjs/operators";

const users: User[] = [
  {
    id: 1,
    userName: "test",
    userPass: "test",
    firstName: "Test",
    lastName: "User"
  }
];

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const { url, method, headers, body } = req;

    return of(null)
      .pipe(mergeMap(handleRoute))
      .pipe(materialize())
      .pipe(delay(500))
      .pipe(dematerialize());

    function handleRoute() {
      switch (true) {
        case url.endsWith("/users/authenticate") && method === "POST":
          return authenticate();
        case url.endsWith("/users") && method === "GET":
          return getUsers();
        default:
          return next.handle(req);
      }
    }

    function authenticate() {
      const { userName, userPass } = body;
      const user = users.find(
        x => x.userName === userName && x.userPass === userPass
      );
      if (!user) {
        return error("Username or password is incorrect");
      }
      return ok({
        id: user.id,
        userName: user.userName,
        firstName: user.firstName,
        lastName: user.lastName,
        token: "fake-jwt-token"
      });
    }
    function getUsers() {
      if (!isLoggedIn()) {
        return unauthorized();
      }
      return ok(users);
    }

    function ok(body?) {
      return of(new HttpResponse({ status: 200, body }));
    }

    function error(message) {
      return throwError({ error: { message } });
    }

    function unauthorized() {
      return throwError({ status: 401, error: { message: "Unauthorised" } });
    }

    function isLoggedIn() {
      return headers.get("Authorization") === "Bearer fake-jwt-token";
    }
  }
}
export let fakeBackendProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true
};
