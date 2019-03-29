import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-mention-avatar',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './mention-avatar.component.html',
  styleUrls: ['./mention-avatar.component.css']
})
export class MentionAvatarComponent {
  inputValue: string;
  webFrameworks = [
    { name: 'React', type: 'JavaScript', icon: 'https://zos.alipayobjects.com/rmsportal/LFIeMPzdLcLnEUe.svg' },
    { name: 'Angular', type: 'JavaScript', icon: 'https://zos.alipayobjects.com/rmsportal/PJTbxSvzYWjDZnJ.png' },
    { name: 'Dva', type: 'Javascript', icon: 'https://zos.alipayobjects.com/rmsportal/EYPwSeEJKxDtVxI.png' },
    { name: 'Flask', type: 'Python', icon: 'https://zos.alipayobjects.com/rmsportal/xaypBUijfnpAlXE.png' }
  ];

  valueWith = (data: { name: string; type: string; icon: string }) => data.name;

  onSelect(value: string): void {
    console.log(value);
  }
}
