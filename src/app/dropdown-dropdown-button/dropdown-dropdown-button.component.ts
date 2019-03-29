import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdown-dropdown-button',
  templateUrl: './dropdown-dropdown-button.component.html',
  styleUrls: ['./dropdown-dropdown-button.component.css']
})
export class DropdownDropdownButtonComponent {
  log(): void {
    console.log('click dropdown button');
  }
}
