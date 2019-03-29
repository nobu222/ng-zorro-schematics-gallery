import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-virtual',
  templateUrl: './table-virtual.component.html'
})
export class TableVirtualComponent implements OnInit {
  listOfData: any[] = [];

  ngOnInit(): void {
    for (let i = 0; i < 20000; i++) {
      this.listOfData.push({
        name: `Edward King`,
        age: 32,
        address: `London`
      });
    }
  }
}
