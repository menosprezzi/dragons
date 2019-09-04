import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { sortBy } from '../../../utils/collections';

import { DragonsService } from '../dragons.service';
import { Dragon } from '../dragons.types';


@Component({
  selector: 'app-dragons-list',
  templateUrl: './dragons-list.component.html',
  styleUrls: ['./dragons-list.component.scss']
})
export class DragonsListComponent implements OnInit {
  dragonList: Dragon[];
  modalController: any;

  constructor(
    @Inject(DOCUMENT) private doc: Document,
    private dragons: DragonsService,
    private router: Router
  ) { }

  ngOnInit() {
    // TODO: Use Controller service in the future.
    this.modalController = this.doc.querySelector('ac-modal-controller');

    this.dragons.list()
      .subscribe(dragons => {
        this.dragonList = dragons.sort(sortBy('name'));
      });
  }

  async delete(dragon: Dragon) {
    const modal = await this.openDeleteModal(dragon);
    const result = await modal.onDidDismiss();
    if (result) {
      await this.dragons.delete(dragon.id).toPromise();
      this.dragonList = this.dragonList.filter(d => d.id !== dragon.id);
    }
  }

  async openDeleteModal(dragon: Dragon) {
    const modalElt = await this.modalController.create({
      title: 'Confirm deletion',
      component: `
      <p>Are you sure that you want to delete ${dragon.name}?</p>
      <div slot="modal-actions" class="d-flex justify-content-end">
        <ac-button id="cancelButton" theme="alert" fill="clear" class="mr-1">Cancel</ac-button>
        <ac-button id="confirmButton" theme="alert">Yes, delete!</ac-button>
      </div>

      `
    });

    modalElt.querySelector('#cancelButton')
      .addEventListener('click', () => modalElt.dismiss(false));
    modalElt.querySelector('#confirmButton')
      .addEventListener('click', () => modalElt.dismiss(true));

    return modalElt;
  }

}
