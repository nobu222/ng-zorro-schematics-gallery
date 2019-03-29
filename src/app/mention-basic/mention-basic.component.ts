import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-mention-basic',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './mention-basic.component.html'
})
export class MentionBasicComponent {
  inputValue: string = '@afc163';
  suggestions = ['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご'];

  onChange(value: string): void {
    console.log(value);
  }

  onSelect(suggestion: string): void {
    console.log(`onSelect ${suggestion}`);
  }
}
