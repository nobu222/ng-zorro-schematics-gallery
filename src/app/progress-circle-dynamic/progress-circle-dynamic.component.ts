import { Component } from '@angular/core';

@Component({
  selector: 'app-progress-circle-dynamic',
  templateUrl: './progress-circle-dynamic.component.html',
  styleUrls: ['./progress-circle-dynamic.component.css']
})
export class ProgressCircleDynamicComponent {
  percent = 0;

  increase(): void {
    this.percent = this.percent + 10;
    if (this.percent > 100) {
      this.percent = 100;
    }
  }

  decline(): void {
    this.percent = this.percent - 10;
    if (this.percent < 0) {
      this.percent = 0;
    }
  }
}
