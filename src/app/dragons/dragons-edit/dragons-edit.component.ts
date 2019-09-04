import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { flatMap } from 'rxjs/operators';

import { Dragon } from '../dragons.types';
import { DragonsService } from '../dragons.service';

@Component({
  selector: 'app-dragons-edit',
  templateUrl: './dragons-edit.component.html',
  styleUrls: ['./dragons-edit.component.scss']
})
export class DragonsEditComponent implements OnInit {
  dragon: Dragon;

  constructor(
    private route: ActivatedRoute,
    private dragons: DragonsService
  ) { }

  ngOnInit() {
    this.route.params
      .pipe(flatMap(params => this.dragons.get(params.id)))
      .subscribe(dragon => this.dragon = dragon);
  }

}
