import { Component, OnInit } from '@angular/core';
import { DragonsService } from '../dragons.service';
import { Dragon } from '../dragons.types';

@Component({
  selector: 'app-dragons-list',
  templateUrl: './dragons-list.component.html',
  styleUrls: ['./dragons-list.component.scss']
})
export class DragonsListComponent implements OnInit {
  dragonList: Dragon[];

  constructor(
    private dragons: DragonsService
  ) { }

  ngOnInit() {
    this.dragons.list()
      .subscribe(dragons => this.dragonList = dragons);
  }

}
