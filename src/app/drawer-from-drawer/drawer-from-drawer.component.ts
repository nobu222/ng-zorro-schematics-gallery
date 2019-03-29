import { Component } from '@angular/core';

@Component({
  selector: 'app-drawer-from-drawer',
  templateUrl: './drawer-from-drawer.component.html',
  styleUrls: ['./drawer-from-drawer.component.css']
})
export class DrawerFromDrawerComponent {
  visible = false;

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }
}
