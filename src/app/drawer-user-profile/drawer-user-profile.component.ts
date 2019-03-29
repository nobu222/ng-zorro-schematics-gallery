import { Component } from '@angular/core';

@Component({
  selector: 'app-drawer-user-profile',
  templateUrl: './drawer-user-profile.component.html',
  styleUrls: ['./drawer-user-profile.component.css']
})
export class DrawerUserProfileComponent {
  data = [
    {
      name: 'Lily'
    },
    {
      name: 'Lily'
    }
  ];

  visible = false;

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }
}
