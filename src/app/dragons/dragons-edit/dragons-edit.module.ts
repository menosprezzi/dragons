import { CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragonsEditComponent } from './dragons-edit.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ DragonsEditComponent ],
  imports: [
    RouterModule.forChild([{ path: '', component: DragonsEditComponent }]),
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DragonsEditModule { }
