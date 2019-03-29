import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-mention-multilines',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './mention-multilines.component.html'
})
export class MentionMultilinesComponent {
  inputValue: string;
  suggestions = ['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご'];
}
