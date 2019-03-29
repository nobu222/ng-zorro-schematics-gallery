import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-mention-readonly',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './mention-readonly.component.html'
})
export class MentionReadonlyComponent {
  inputValue: string;
  suggestions = ['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご'];
}
