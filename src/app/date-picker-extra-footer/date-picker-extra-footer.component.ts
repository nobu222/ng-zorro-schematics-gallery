import { Component } from '@angular/core';

@Component({
  selector: 'app-date-picker-extra-footer',
  templateUrl: './date-picker-extra-footer.component.html',
  styleUrls: ['./date-picker-extra-footer.component.css']
})
export class DatePickerExtraFooterComponent {
  plainFooter = 'plain extra footer';
  footerRender = () => 'extra footer';
}
