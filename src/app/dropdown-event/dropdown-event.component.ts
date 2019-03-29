import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdown-event',
  templateUrl: './dropdown-event.component.html',
  styles: []
})
export class DropdownEventComponent {
  log(data: string): void {
    console.log(data);
  }
}
