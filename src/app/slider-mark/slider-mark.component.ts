import { Component } from '@angular/core';

@Component({
  selector: 'app-slider-mark',
  templateUrl: './slider-mark.component.html',
  styleUrls: ['./slider-mark.component.css']
})
export class SliderMarkComponent {
  marks: any = {
    0: '0°C',
    26: '26°C',
    37: '37°C',
    100: {
      style: {
        color: '#f50'
      },
      label: '<strong>100°C</strong>'
    }
  };

  changeMarks() {
    this.marks = {
      20: '20%',
      99: '99%'
    };
  }
}
