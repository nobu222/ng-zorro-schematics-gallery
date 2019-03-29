import { Component } from '@angular/core';

@Component({
  selector: 'app-drawer-placement',
  templateUrl: './drawer-placement.component.html'
})
export class DrawerPlacementComponent {
  visible = false;
  placement = 'left';
  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }
}
