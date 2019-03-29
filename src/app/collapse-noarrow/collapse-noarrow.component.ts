import { Component } from '@angular/core';

@Component({
  selector: 'app-collapse-noarrow',
  templateUrl: './collapse-noarrow.component.html',
  styles: []
})
export class CollapseNoarrowComponent {
  panels = [
    {
      active: true,
      name: 'This is panel header 1',
      arrow: true
    },
    {
      active: false,
      arrow: false,
      name: 'This is panel header 2'
    }
  ];
}
