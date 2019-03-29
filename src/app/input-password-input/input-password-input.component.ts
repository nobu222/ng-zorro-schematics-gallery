import { Component } from '@angular/core';

@Component({
  selector: 'app-input-password-input',
  templateUrl: './input-password-input.component.html',
  styleUrls: ['./input-password-input.component.css']
})
export class InputPasswordInputComponent {
  passwordVisible = false;
  password: string;
}
