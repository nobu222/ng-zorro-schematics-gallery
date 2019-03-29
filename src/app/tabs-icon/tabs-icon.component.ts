import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs-icon',
  templateUrl: './tabs-icon.component.html'
})
export class TabsIconComponent {
  tabs = [
    {
      active: true,
      name: 'Tab 1',
      icon: 'apple'
    },
    {
      active: false,
      name: 'Tab 2',
      icon: 'android'
    }
  ];
}
