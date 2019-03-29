import { Component } from '@angular/core';
@Component({
  selector: 'app-menu-vertical',
  templateUrl: './menu-vertical.component.html',
  styles: []
})
export class MenuVerticalComponent {
  change(value: boolean): void {
    console.log(value);
  }
}
