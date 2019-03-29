import { Component } from '@angular/core';
import { distanceInWords } from 'date-fns';

@Component({
  selector: 'app-comment-basic',
  templateUrl: './comment-basic.component.html',
  styleUrls: ['./comment-basic.component.css']
})
export class CommentBasicComponent {
  likes = 0;
  dislikes = 0;
  time = distanceInWords(new Date(), new Date());

  like(): void {
    this.likes = 1;
    this.dislikes = 0;
  }

  dislike(): void {
    this.likes = 0;
    this.dislikes = 1;
  }
}
