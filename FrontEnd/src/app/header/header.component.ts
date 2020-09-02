import { Component, Output, EventEmitter, OnInit } from "@angular/core";
import { AuthService } from "../auth/auth.service";
import { Router } from "@angular/router";
import { User } from "../shared/user.model";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html"
})
export class HeaderComponent implements OnInit {
  @Output() featureSelected = new EventEmitter<string>();
  currentUsername: string;
  constructor(private authService: AuthService, private router: Router) {
    this.authService.getCurrentUsernameObs().subscribe(currentUsername => {
      this.currentUsername = currentUsername;
      console.log(currentUsername);
    });
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(["/auth"]);
    this.currentUsername = null;
  }
  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }
  ngOnInit() {}
}
