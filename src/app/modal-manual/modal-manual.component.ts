import { Component } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd';

@Component({
  selector: 'app-modal-manual',
  templateUrl: './modal-manual.component.html',
  styles: []
})
export class ModalManualComponent {
  constructor(private modalService: NzModalService) {}

  success(): void {
    const modal = this.modalService.success({
      nzTitle: 'This is a notification message',
      nzContent: 'This modal will be destroyed after 1 second'
    });

    setTimeout(() => modal.destroy(), 1000);
  }
}
