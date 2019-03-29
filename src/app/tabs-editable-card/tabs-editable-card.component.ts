import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs-editable-card',
  templateUrl: './tabs-editable-card.component.html'
})
export class TabsEditableCardComponent {
  tabs = ['Tab 1', 'Tab 2'];

  closeTab(tab: string): void {
    this.tabs.splice(this.tabs.indexOf(tab), 1);
  }

  newTab(): void {
    this.tabs.push('New Tab');
  }
}
