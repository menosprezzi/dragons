import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { NoAuthGuard } from './auth/no-auth.guard';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [
    { provide: APP_INITIALIZER, useFactory: CoreModule.initModuleFactory, deps: [AuthService], multi: true },
    AuthService,
    AuthGuard,
    NoAuthGuard
  ],
})
export class CoreModule {
  static initModuleFactory(authService: AuthService) {
    return () => {
      return authService.ensureUser();
    };
  }
}
