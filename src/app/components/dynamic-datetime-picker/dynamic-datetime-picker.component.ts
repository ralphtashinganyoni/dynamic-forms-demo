import { Component, Input } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-dynamic-datetime-picker',
  templateUrl: './dynamic-datetime-picker.component.html',
  styleUrls: ['./dynamic-datetime-picker.component.css']
})
export class DynamicDatetimePickerComponent {
  @Input() field: any;
  formName: FormGroup;

  constructor(private formgroupDirective: FormGroupDirective) {
    this.formName = formgroupDirective.control;
  }
}