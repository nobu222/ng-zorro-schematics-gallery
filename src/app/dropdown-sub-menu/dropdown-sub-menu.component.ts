import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdown-sub-menu',
  templateUrl: './dropdown-sub-menu.component.html',
  styles: []
})
export class DropdownSubMenuComponent {
  change(value: boolean): void {
    console.log(value);
  }
}
