import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-popconfirm-locale',
  templateUrl: './popconfirm-locale.component.html'
})
export class PopconfirmLocaleComponent {
  cancel(): void {
    this.nzMessageService.info('click cancel');
  }

  confirm(): void {
    this.nzMessageService.info('click confirm');
  }

  constructor(private nzMessageService: NzMessageService) {}
}
