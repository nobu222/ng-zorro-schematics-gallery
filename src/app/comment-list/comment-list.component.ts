import { Component } from '@angular/core';
import { addDays, distanceInWords } from 'date-fns';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styles: []
})
export class CommentListComponent {
  data = [
    {
      author: 'Han Solo',
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      content:
        'We supply a series of design principles, practical patterns and high quality design resources' +
        '(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
      datetime: distanceInWords(new Date(), addDays(new Date(), 1))
    },
    {
      author: 'Han Solo',
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      content:
        'We supply a series of design principles, practical patterns and high quality design resources' +
        '(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
      datetime: distanceInWords(new Date(), addDays(new Date(), 2))
    }
  ];
}
