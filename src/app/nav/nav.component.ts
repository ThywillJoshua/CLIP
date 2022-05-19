import { Component, OnInit } from '@angular/core';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  constructor(public model: ModalService) {}

  ngOnInit(): void {}

  openModal($event: Event) {
    $event.preventDefault();

    this.model.toggleModal('auth');
  }
}