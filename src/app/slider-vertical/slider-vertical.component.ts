import { Component } from '@angular/core';

@Component({
  selector: 'app-slider-vertical',
  templateUrl: './slider-vertical.component.html'
})
export class SliderVerticalComponent {
  style = {
    float: 'left',
    height: '300px',
    marginLeft: '70px'
  };

  marks = {
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
}
