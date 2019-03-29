import { Component } from '@angular/core';

@Component({
  selector: 'app-list-simple',
  templateUrl: './list-simple.component.html'
})
export class ListSimpleComponent {
  data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.'
  ];
}
