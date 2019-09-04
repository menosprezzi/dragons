import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [SigninComponent],
  imports: [
    RouterModule.forChild([{ path: '', component: SigninComponent }]),
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SigninModule { }
