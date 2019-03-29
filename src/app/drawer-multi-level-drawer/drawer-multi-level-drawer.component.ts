import { Component } from '@angular/core';

@Component({
  selector: 'app-drawer-multi-level-drawer',
  templateUrl: './drawer-multi-level-drawer.component.html',
  styleUrls: ['./drawer-multi-level-drawer.component.css']
})
export class DrawerMultiLevelDrawerComponent {
  visible = false;
  childrenVisible = false;

  vegetables = ['asparagus', 'bamboo', 'potato', 'carrot', 'cilantro', 'potato', 'eggplant'];

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

  openChildren(): void {
    this.childrenVisible = true;
  }

  closeChildren(): void {
    this.childrenVisible = false;
  }
}
