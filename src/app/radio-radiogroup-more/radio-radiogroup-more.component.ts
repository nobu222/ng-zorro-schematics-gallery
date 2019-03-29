import { Component } from '@angular/core';

@Component({
  selector: 'app-radio-radiogroup-more',
  templateUrl: './radio-radiogroup-more.component.html',
  styleUrls: ['./radio-radiogroup-more.component.css']
})
export class RadioRadiogroupMoreComponent {
  radioValue = 'A';
  style = {
    display: 'block',
    height: '30px',
    lineHeight: '30px'
  };
}
