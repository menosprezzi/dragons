import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { DragonsService } from './dragons.service';



@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        loadChildren: () => import('./dragons-list/dragons-list.module')
          .then(mod => mod.DragonsListModule)
      },
      {
        path: ':id',
        loadChildren: () => import('./dragons-edit/dragons-edit.module')
          .then(mod => mod.DragonsEditModule)
      }
    ]),
    CommonModule,
    HttpClientModule
  ],
  providers: [
    DragonsService
  ]
})
export class DragonsModule { }
