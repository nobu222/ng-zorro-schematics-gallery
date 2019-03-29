import { Component, ViewEncapsulation } from '@angular/core';
import { MentionOnSearchTypes } from 'ng-zorro-antd';

@Component({
  selector: 'app-mention-multiple-trigger',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './mention-multiple-trigger.component.html'
})
export class MentionMultipleTriggerComponent {
  inputValue: string;
  suggestions: string[] = [];
  users = ['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご'];
  tags = ['1.0', '2.0', '3.0'];

  onSearchChange({ value, prefix }: MentionOnSearchTypes): void {
    console.log('nzOnSearchChange', value, prefix);
    this.suggestions = prefix === '@' ? this.users : this.tags;
  }
}
