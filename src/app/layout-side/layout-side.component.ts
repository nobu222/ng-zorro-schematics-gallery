import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-side',
  templateUrl: './layout-side.component.html',
  styleUrls: ['./layout-side.component.css']
})
export class LayoutSideComponent {
  isCollapsed = false;
  isReverseArrow = false;
  width = 200;
}
