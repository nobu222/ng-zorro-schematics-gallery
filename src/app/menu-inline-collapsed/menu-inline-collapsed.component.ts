import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-inline-collapsed',
  templateUrl: './menu-inline-collapsed.component.html'
})
export class MenuInlineCollapsedComponent {
  isCollapsed = false;

  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }
}
