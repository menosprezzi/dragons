import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', redirectTo: 'signin', pathMatch: 'full' },
      {
        path: 'signin',
        loadChildren: () => import('./signin/signin.module').then(mod => mod.SigninModule),
      },
      {
        path: 'signup',
        loadChildren: () => import('./signup/signup.module').then(mod => mod.SignupModule)
      }
    ]),
    CommonModule
  ]
})
export class AccountModule { }
