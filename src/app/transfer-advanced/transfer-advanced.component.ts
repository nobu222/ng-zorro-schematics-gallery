import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-transfer-advanced',
  templateUrl: './transfer-advanced.component.html'
})
export class TransferAdvancedComponent implements OnInit {
  list: Array<{ key: string; title: string; description: string; direction: string }> = [];

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    const ret: Array<{ key: string; title: string; description: string; direction: string }> = [];
    for (let i = 0; i < 20; i++) {
      ret.push({
        key: i.toString(),
        title: `content${i + 1}`,
        description: `description of content${i + 1}`,
        direction: Math.random() * 2 > 1 ? 'right' : ''
      });
    }
    this.list = ret;
  }

  reload(direction: string): void {
    this.getData();
    this.msg.success(`your clicked ${direction}!`);
  }

  select(ret: {}): void {
    console.log('nzSelectChange', ret);
  }

  change(ret: {}): void {
    console.log('nzChange', ret);
  }

  constructor(public msg: NzMessageService) {}
}
