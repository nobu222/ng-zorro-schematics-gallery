import { Component } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.component.html',
  styleUrls: ['./modal-info.component.css']
})
export class ModalInfoComponent {
  constructor(private modalService: NzModalService) {}

  info(): void {
    this.modalService.info({
      nzTitle: 'This is a notification message',
      nzContent: '<p>some messages...some messages...</p><p>some messages...some messages...</p>',
      nzOnOk: () => console.log('Info OK')
    });
  }

  success(): void {
    this.modalService.success({
      nzTitle: 'This is a success message',
      nzContent: 'some messages...some messages...'
    });
  }

  error(): void {
    this.modalService.error({
      nzTitle: 'This is an error message',
      nzContent: 'some messages...some messages...'
    });
  }

  warning(): void {
    this.modalService.warning({
      nzTitle: 'This is an warning message',
      nzContent: 'some messages...some messages...'
    });
  }
}
