import { Component } from '@angular/core';

@Component({
  selector: 'app-drawer-basic-right',
  templateUrl: './drawer-basic-right.component.html'
})
export class DrawerBasicRightComponent {
  visible = false;

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }
}
