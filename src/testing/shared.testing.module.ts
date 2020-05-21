import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { environment } from '../environments/environment';

@NgModule({
  imports: [ CommonModule, RouterTestingModule, HttpClientTestingModule ],
  providers: [ { provide: 'APP_ENVIRONMENT', useValue: environment } ]
})
export class SharedTestingModule { }
