import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { User } from './auth.types';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  static STORAGE_USER_KEY = 'USER';
  private $currentUser: BehaviorSubject<User> = new BehaviorSubject(null);

  readonly currentUser = this.$currentUser.asObservable();
  readonly isAuthenticated = this.$currentUser.asObservable()
    .pipe(map(x => !!x));

  constructor() { }

  async signUp(user: User) {
    // Do some API call here!
    this.$currentUser.next(user);
    localStorage.setItem(AuthService.STORAGE_USER_KEY, JSON.stringify(user));
  }

  async restoreFromCache() {
    const rawUser = localStorage.getItem(AuthService.STORAGE_USER_KEY);
    return rawUser ? JSON.parse(rawUser) as User : null;
  }

  async ensureUser() {
    if (!this.$currentUser.getValue()) {
      const userFromCache = await this.restoreFromCache();
      this.$currentUser.next(userFromCache);
    }
  }

  async signOut() {
    this.$currentUser.next(null);
    localStorage.removeItem(AuthService.STORAGE_USER_KEY)
  }
}
