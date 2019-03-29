import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-sider-current',
  templateUrl: './menu-sider-current.component.html',
  styles: []
})
export class MenuSiderCurrentComponent {
  openMap: { [name: string]: boolean } = {
    sub1: true,
    sub2: false,
    sub3: false
  };

  openHandler(value: string): void {
    for (const key in this.openMap) {
      if (key !== value) {
        this.openMap[key] = false;
      }
    }
  }
}
