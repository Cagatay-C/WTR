import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";
import { AuthService } from "./auth.service";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const currentUser = this.authService.currentUserValue;

    if (currentUser) {
      console.log("I am working!! AuthGuard***");
      return true;
    }

    this.router.navigate(["/auth"], {
      queryParams: { returnUrl: state.url }
    });
    return false;
  }
}
