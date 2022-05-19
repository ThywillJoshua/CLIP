import { Injectable } from '@angular/core'; //1. Use injectable decorator

interface IModal {
  id: string;
  visible: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modals: IModal[] = [];
  constructor() {}

  register(id: string) {
    this.modals.push({
      id,
      visible: false,
    });
  }

  unregister(id: string) {
    this.modals = this.modals.filter((element) => id !== element.id);
  }

  isModalOpen(id: string): boolean {
    return Boolean(this.modals.find((element) => id === element.id)?.visible);
  }

  toggleModal(id: string) {
    const modal = this.modals.find((element) => id === element.id);

    if (modal) modal.visible = !modal.visible;
  }
}
