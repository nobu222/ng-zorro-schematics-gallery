import { Component } from '@angular/core';

@Component({
  selector: 'app-skeleton-children',
  templateUrl: './skeleton-children.component.html',
  styleUrls: ['./skeleton-children.component.css']
})
export class SkeletonChildrenComponent {
  loading = false;

  showSkeleton(): void {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }
}
