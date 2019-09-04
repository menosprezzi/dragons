import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService
  ) { }


  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {

    await this.authService.ensureUser();
    if (!this.authService.isAuthenticated) {
      this.router.navigate(['account']);
    }
    return this.authService.isAuthenticated;
  }
}
