import { Component } from '@angular/core';

@Component({
  selector: 'app-alert-closable',
  templateUrl: './alert-closable.component.html',
  styleUrls: ['./alert-closable.component.css']
})
export class AlertClosableComponent {
  afterClose(): void {
    console.log('close');
  }
}
