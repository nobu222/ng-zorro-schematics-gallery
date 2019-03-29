import { Component } from '@angular/core';

@Component({
  selector: 'app-progress-format',
  templateUrl: './progress-format.component.html',
  styleUrls: ['./progress-format.component.css']
})
export class ProgressFormatComponent {
  formatOne = (percent: number) => `${percent} Days`;
  formatTwo = () => `Done`;
}
