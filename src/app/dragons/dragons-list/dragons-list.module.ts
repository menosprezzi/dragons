import { CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragonsListComponent } from './dragons-list.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [DragonsListComponent],
  imports: [
    RouterModule.forChild([{ path: '', component: DragonsListComponent }]),
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DragonsListModule { }
