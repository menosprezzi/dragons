import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

import { Dragon } from '../dragons.types';
import { DragonsService } from '../dragons.service';

@Component({
  selector: 'app-dragons-edit',
  templateUrl: './dragons-edit.component.html',
  styleUrls: ['./dragons-edit.component.scss']
})
export class DragonsEditComponent implements OnInit {
  @ViewChild('nameInput', { static: true }) nameInput: ElementRef;
  @ViewChild('typeInput', { static: true }) typeInput: ElementRef;
  @ViewChild('titleInput', { static: true }) titleInput: ElementRef;
  @ViewChild('descriptionInput', { static: true }) descriptionInput: ElementRef;
  @ViewChild('historyInput', { static: true }) historyInput: ElementRef;

  isSaving: boolean;
  isEditing: boolean;
  dragon: Dragon = {} as any;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private dragons: DragonsService
  ) { }

  async ngOnInit() {
    this.route.params
      .pipe(map(params => params.id))
      .subscribe(id => {
        if (id !== 'new') {
          this.isEditing = true;
          this.dragons.get(id)
            .subscribe(dragon => this.dragon = dragon);
        }
      });
  }

  async save() {
    const dragon = {
      id: this.dragon.id,
      name: this.nameInput.nativeElement.value,
      type: this.typeInput.nativeElement.value,
      title: this.titleInput.nativeElement.value,
      description: this.descriptionInput.nativeElement.value,
      history: this.historyInput.nativeElement.value,
    };

    this.isSaving = true;
    if (this.isEditing) {
      await this.dragons.save(dragon).toPromise();
    } else {
      await this.dragons.create(dragon).toPromise();
    }
    this.isSaving = false;
    this.location.back();
  }

  goBack() {
    this.location.back();
  }

}
