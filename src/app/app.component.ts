import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './core/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  $isAuthenticated: Observable<boolean>;
  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.$isAuthenticated = this.authService.isAuthenticated;
  }

  async signOut() {
    await this.authService.signOut();
    await this.router.navigate(['account']);
  }
}
