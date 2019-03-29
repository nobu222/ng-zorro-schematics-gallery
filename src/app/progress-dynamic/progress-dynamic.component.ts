import { Component } from '@angular/core';

@Component({
  selector: 'app-progress-dynamic',
  templateUrl: './progress-dynamic.component.html'
})
export class ProgressDynamicComponent {
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
