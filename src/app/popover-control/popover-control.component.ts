import { Component } from '@angular/core';

@Component({
  selector: 'app-popover-control',
  templateUrl: './popover-control.component.html'
})
export class PopoverControlComponent {
  visible: boolean;

  clickMe(): void {
    this.visible = false;
  }

  change(value: boolean): void {
    console.log(value);
  }
}
