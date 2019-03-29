import { Component } from '@angular/core';

@Component({
  selector: 'app-input-number-formatter',
  templateUrl: './input-number-formatter.component.html',
  styleUrls: ['./input-number-formatter.component.css']
})
export class InputNumberFormatterComponent {
  demoValue = 100;
  formatterPercent = (value: number) => `${value} %`;
  parserPercent = (value: string) => value.replace(' %', '');
  formatterDollar = (value: number) => `$ ${value}`;
  parserDollar = (value: string) => value.replace('$ ', '');
}
