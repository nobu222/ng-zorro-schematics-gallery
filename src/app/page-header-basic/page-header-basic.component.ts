import { Component } from '@angular/core';

@Component({
  selector: 'app-page-header-basic',
  templateUrl: './page-header-basic.component.html',
  styleUrls: ['./page-header-basic.component.css']
})
export class PageHeaderBasicComponent {

  onBack() {
    console.log('onBack');
  }
}
