import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { map } from "rxjs/operators";
import { User } from "../shared/user.model";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  private currentUser: Observable<User>;
  private currentUsernameSubj: Subject<string> = new Subject();
  private currentUserNameObs: Observable<string>;

  private isLogoutSubject: BehaviorSubject<boolean> = new BehaviorSubject<
    boolean
  >(false);

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem("currentUser"))
    );
    this.currentUser = this.currentUserSubject;
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }
  public get isLogOut(): boolean {
    return this.isLogoutSubject.value;
  }
  public getCurrentUsernameObs(): Observable<string> {
    return this.currentUsernameSubj;
  }

  login(userName: string, userPass: string) {
    return this.http
      .post<any>("/api/auth", { username: userName, password: userPass })
      .pipe(
        map(user => {
          localStorage.setItem("currentUser", JSON.stringify(user));
          this.currentUserSubject.next(user);
          this.currentUsernameSubj.next(userName);
          return user;
        })
      );
  }
  signUp(userName: string, userPass: string) {
    return this.http.post<any>("/api/users", {
      username: userName,
      password: userPass
    });
  }
  logout() {
    localStorage.removeItem("currentUser");
    this.currentUserSubject.next(null);
    this.isLogoutSubject.next(true);
  }
}
