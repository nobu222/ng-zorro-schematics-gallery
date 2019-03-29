import { Component } from '@angular/core';

const tagsFromServer = ['Movie', 'Books', 'Music', 'Sports'];

@Component({
  selector: 'app-tag-hot-tags',
  templateUrl: './tag-hot-tags.component.html',
  styles: []
})
export class TagHotTagsComponent {
  hotTags = tagsFromServer;
  selectedTags: string[] = [];

  handleChange(checked: boolean, tag: string): void {
    if (checked) {
      this.selectedTags.push(tag);
    } else {
      this.selectedTags = this.selectedTags.filter(t => t !== tag);
    }
    console.log('You are interested in: ', this.selectedTags);
  }
}
