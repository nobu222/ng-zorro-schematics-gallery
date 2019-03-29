import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mention-controlled',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './mention-controlled.component.html'
})
export class MentionControlledComponent implements OnInit {
  suggestions = ['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご'];
  validateForm: FormGroup;
  @ViewChild('mentions') mentionChild: any;

  get mention(): AbstractControl {
    return this.validateForm.get('mention')!;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      mention: ['@afc163 ', [Validators.required, this.mentionValidator]]
    });
  }

  mentionValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (this.mentionChild.getMentions().length < 2) {
      return { confirm: true, error: true };
    }
    return {};
  };

  submitForm(): void {
    this.mention.markAsDirty();
    if (this.mention.valid) {
      console.log('Submit!!!', this.mention.value);
      console.log(this.mentionChild.getMentions());
    } else {
      console.log('Errors in form!!!');
    }
  }

  resetForm(): void {
    this.validateForm.reset({
      mention: '@afc163 '
    });
  }
}
