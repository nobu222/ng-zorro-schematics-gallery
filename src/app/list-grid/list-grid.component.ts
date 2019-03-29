import { Component } from '@angular/core';

@Component({
  selector: 'app-list-grid',
  templateUrl: './list-grid.component.html'
})
export class ListGridComponent {
  data = [
    {
      title: 'Title 1'
    },
    {
      title: 'Title 2'
    },
    {
      title: 'Title 3'
    },
    {
      title: 'Title 4'
    }
  ];
}
