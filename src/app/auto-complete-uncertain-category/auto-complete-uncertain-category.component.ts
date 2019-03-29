import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-auto-complete-uncertain-category',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './auto-complete-uncertain-category.component.html',
  styleUrls: ['./auto-complete-uncertain-category.component.css']
})
export class AutoCompleteUncertainCategoryComponent {
  inputValue: string;
  options: Array<{ value: string; category: string; count: number }> = [];

  onChange(value: string): void {
    this.options = new Array(this.getRandomInt(15, 5))
      .join('.')
      .split('.')
      .map((_item, idx) => ({
        value,
        category: `${value}${idx}`,
        count: this.getRandomInt(200, 100)
      }));
  }

  private getRandomInt(max: number, min: number = 0): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
