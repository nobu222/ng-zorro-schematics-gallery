import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs-disabled',
  templateUrl: './tabs-disabled.component.html'
})
export class TabsDisabledComponent {
  tabs = [
    {
      name: 'Tab 1',
      disabled: false
    },
    {
      name: 'Tab 2',
      disabled: true
    },
    {
      name: 'Tab 3',
      disabled: false
    }
  ];
}
