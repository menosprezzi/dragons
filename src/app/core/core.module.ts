import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorageModule } from '@ngx-pwa/local-storage';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StorageModule
  ],
  providers: [
    AuthService,
    AuthGuard
  ]
})
export class CoreModule { }
