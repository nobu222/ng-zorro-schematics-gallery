import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { concatMap } from 'rxjs/operators';

@Component({
  selector: 'app-message-close',
  templateUrl: './message-close.component.html',
  styles: []
})
export class MessageCloseComponent {
  constructor(private message: NzMessageService) {}

  startShowMessages(): void {
    this.message
      .loading('Action in progress', { nzDuration: 2500 })
      .onClose!.pipe(
        concatMap(() => this.message.success('Loading finished', { nzDuration: 2500 }).onClose!),
        concatMap(() => this.message.info('Loading finished is finished', { nzDuration: 2500 }).onClose!)
      )
      .subscribe(() => {
        console.log('All completed!');
      });
  }
}
