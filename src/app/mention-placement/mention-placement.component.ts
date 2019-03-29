import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-mention-placement',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './mention-placement.component.html'
})
export class MentionPlacementComponent {
  inputValue: string;
  suggestions = ['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご'];

  onChange(value: string): void {
    console.log(value);
  }

  onSelect(suggestion: string): void {
    console.log(`onSelect ${suggestion}`);
  }
}
