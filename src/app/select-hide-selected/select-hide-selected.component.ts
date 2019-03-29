import { Component } from '@angular/core';

@Component({
  selector: 'app-select-hide-selected',
  templateUrl: './select-hide-selected.component.html'
})
export class SelectHideSelectedComponent {
  listOfOption = ['Apples', 'Nails', 'Bananas', 'Helicopters'];
  listOfSelectedValue: string[] = [];

  isNotSelected(value: string): boolean {
    return this.listOfSelectedValue.indexOf(value) === -1;
  }
}
