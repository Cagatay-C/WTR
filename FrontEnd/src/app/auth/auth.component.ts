import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";
import { DataStorageService } from "../shared/data-storage.service";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html"
})
export class AuthComponent implements OnInit {
  isLogin: boolean = true;
  isLoading: boolean = false;
  authFormReact: FormGroup;
  forbiddenUserNames = ["caglar"];
  username: string;
  password: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private dataStorage: DataStorageService
  ) {
    if (this.authService.currentUserValue) {
      this.router.navigate(["/"]);
    }
    if (this.authService.isLogOut) {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
      }, 2000);
    }
  }

  switchLogin() {
    this.isLogin = !this.isLogin;
  }

  ngOnInit() {
    // this.authFormReact = new FormGroup({
    //   username: new FormControl(null, [
    //     Validators.required,
    //     this.forbiddenNames.bind(this)
    //   ]),
    //   password: new FormControl(null, Validators.required)
    // });
    this.initForm();
  }

  onSubmit() {
    this.initForm();
    this.isLoading = true;
    if (this.isLogin) {
      setTimeout(() => {
        this.authService.login(this.username, this.password).subscribe(data => {
          this.router.navigate(["/books"]);
        });
        this.isLoading = false;
      }, 2000);
    } else {
      setTimeout(() => {
        this.isLoading = false;
      }, 2000);
      this.authService
        .signUp(this.username, this.password)
        .subscribe(response => {
          console.log(response);
        });
    }
  }
  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUserNames.indexOf(control.value) !== -1) {
      return { nameIsForbidden: true };
    }
    return null;
  }
  private initForm() {
    let userName = "";
    let userPass = "";

    this.authFormReact = new FormGroup({
      username: new FormControl(userName, [
        Validators.required,
        this.forbiddenNames.bind(this)
      ]),
      password: new FormControl(userPass, Validators.required)
    });
  }
}
