import { Component } from '@angular/core';

@Component({
  selector: 'app-affix-on-change',
  templateUrl: './affix-on-change.component.html'
})
export class AffixOnChangeComponent {
  onChange(status: boolean) {
    console.log(status);
  }
}
