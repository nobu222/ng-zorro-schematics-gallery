import { Component } from '@angular/core';

@Component({
  selector: 'app-timeline-pending',
  templateUrl: './timeline-pending.component.html'
})
export class TimelinePendingComponent {
  reverse = false;

  toggleReverse(): void {
    this.reverse = !this.reverse;
  }
}
