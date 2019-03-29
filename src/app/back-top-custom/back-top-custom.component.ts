import { Component } from '@angular/core';

@Component({
  selector: 'app-back-top-custom',
  templateUrl: './back-top-custom.component.html',
  styleUrls: ['./back-top-custom.component.css']
})
export class BackTopCustomComponent {
  notify(): void {
    console.log('notify');
  }
}
