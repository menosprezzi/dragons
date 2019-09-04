import { Injectable } from '@angular/core';
import { StorageMap } from '@ngx-pwa/local-storage';
import { User } from './auth.types';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  static STORAGE_USER_KEY = 'USER';
  isAuthenticated = false;
  currentUser: User;

  constructor(
    private storage: StorageMap
  ) { }

  async signUp(user: User) {
    // Do some API call here!
    this.currentUser = user;
    this.isAuthenticated = true;

    console.log(this.storage);
    await this.storage.set(AuthService.STORAGE_USER_KEY, this.currentUser)
      .toPromise();
  }

  async restoreFromCache() {
    return await this.storage.get(AuthService.STORAGE_USER_KEY).toPromise() as User;
  }

  async ensureUser() {
    if (!this.currentUser) {
      this.currentUser = await this.restoreFromCache();
      this.isAuthenticated = !!this.currentUser;
    }
  }
}
