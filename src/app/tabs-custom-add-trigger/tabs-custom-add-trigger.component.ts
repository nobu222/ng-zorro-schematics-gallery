import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs-custom-add-trigger',
  templateUrl: './tabs-custom-add-trigger.component.html',
  styles: []
})
export class TabsCustomAddTriggerComponent {
  index = 0;
  tabs = ['Tab 1', 'Tab 2'];

  closeTab(tab: string): void {
    this.tabs.splice(this.tabs.indexOf(tab), 1);
  }

  newTab(): void {
    this.tabs.push('New Tab');
    this.index = this.tabs.length - 1;
  }
}
