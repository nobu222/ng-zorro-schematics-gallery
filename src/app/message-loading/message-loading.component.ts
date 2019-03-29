import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-message-loading',
  templateUrl: './message-loading.component.html',
  styles: []
})
export class MessageLoadingComponent {
  constructor(private message: NzMessageService) {}

  createBasicMessage(): void {
    const id = this.message.loading('Action in progress..', { nzDuration: 0 }).messageId;
    setTimeout(() => {
      this.message.remove(id);
    }, 2500);
  }
}
