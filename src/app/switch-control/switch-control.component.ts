import { Component } from '@angular/core';

@Component({
  selector: 'app-switch-control',
  templateUrl: './switch-control.component.html'
})
export class SwitchControlComponent {
  switchValue = false;
  loading = false;

  clickSwitch(): void {
    if (!this.loading) {
      this.loading = true;
      setTimeout(() => {
        this.switchValue = !this.switchValue;
        this.loading = false;
      }, 3000);
    }
  }
}
