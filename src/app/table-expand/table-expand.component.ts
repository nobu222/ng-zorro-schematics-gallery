import { Component } from '@angular/core';

@Component({
  selector: 'app-table-expand',
  templateUrl: './table-expand.component.html',
  styles: []
})
export class TableExpandComponent {
  mapOfExpandData: { [key: string]: boolean } = {};
  listOfData = [
    {
      id: 1,
      name: 'John Brown',
      age: 32,
      expand: false,
      address: 'New York No. 1 Lake Park',
      description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.'
    },
    {
      id: 2,
      name: 'Jim Green',
      age: 42,
      expand: false,
      address: 'London No. 1 Lake Park',
      description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.'
    },
    {
      id: 3,
      name: 'Joe Black',
      age: 32,
      expand: false,
      address: 'Sidney No. 1 Lake Park',
      description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.'
    }
  ];
}
