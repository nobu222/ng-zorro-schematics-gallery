import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transfer-basic',
  templateUrl: './transfer-basic.component.html'
})
export class TransferBasicComponent implements OnInit {
  // tslint:disable-next-line:no-any
  list: any[] = [];
  disabled = false;

  ngOnInit(): void {
    for (let i = 0; i < 20; i++) {
      this.list.push({
        key: i.toString(),
        title: `content${i + 1}`,
        disabled: i % 3 < 1
      });
    }

    [2, 3].forEach(idx => (this.list[idx].direction = 'right'));
  }

  select(ret: {}): void {
    console.log('nzSelectChange', ret);
  }

  change(ret: {}): void {
    console.log('nzChange', ret);
  }
}
