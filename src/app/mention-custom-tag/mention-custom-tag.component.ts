import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-mention-custom-tag',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './mention-custom-tag.component.html'
})
export class MentionCustomTagComponent {
  inputValue: string;
  webFrameworks = [
    { name: 'React', type: 'JavaScript' },
    { name: 'Angular', type: 'JavaScript' },
    { name: 'Laravel', type: 'PHP' },
    { name: 'Flask', type: 'Python' },
    { name: 'Django', type: 'Python' }
  ];

  valueWith = (data: { name: string; type: string }) => data.name;

  onSelect(value: string): void {
    console.log(value);
  }
}
