import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth/auth.service';
import {User} from '../../core/auth/auth.types';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  @ViewChild('nameInput', { static: true }) nameInput: ElementRef;
  @ViewChild('usernameInput', { static: true }) usernameInput: ElementRef;
  @ViewChild('passwordInput', { static: true }) passwordInput: ElementRef;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  async createAccount() {
    const user: User = {
      name: this.nameInput.nativeElement.value,
      username: this.usernameInput.nativeElement.value,
      password: this.passwordInput.nativeElement.value,
    };
    await this.authService.signUp(user);
    await this.router.navigate(['dragons']);
  }

}
