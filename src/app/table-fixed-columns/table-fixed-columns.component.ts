import { Component } from '@angular/core';

@Component({
  selector: 'app-table-fixed-columns',
  templateUrl: './table-fixed-columns.component.html'
})
export class TableFixedColumnsComponent {
  listOfData = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York'
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 40,
      address: 'London'
    }
  ];
}
