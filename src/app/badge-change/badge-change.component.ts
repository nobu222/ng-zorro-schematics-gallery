import { Component } from '@angular/core';

@Component({
  selector: 'app-badge-change',
  templateUrl: './badge-change.component.html',
  styleUrls: ['./badge-change.component.css']
})
export class BadgeChangeComponent {
  count = 5;
  dot = true;

  addCount(): void {
    this.count++;
  }

  minCount(): void {
    this.count--;
    if (this.count < 0) {
      this.count = 0;
    }
  }
}
