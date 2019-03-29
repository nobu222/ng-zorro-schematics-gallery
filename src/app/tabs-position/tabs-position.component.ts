import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs-position',
  templateUrl: './tabs-position.component.html',
  styles: []
})
export class TabsPositionComponent {
  position = 'top';
  tabs = [1, 2, 3];
  options = [
    { value: 'top', label: 'top' },
    { value: 'left', label: 'left' },
    { value: 'right', label: 'right' },
    { value: 'bottom', label: 'bottom' }
  ];
}
