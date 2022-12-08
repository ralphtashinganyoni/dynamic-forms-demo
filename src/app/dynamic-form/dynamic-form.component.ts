import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent {
  @Input() model!:any;
  public dynamicFormGroup!: FormGroup;
  public fields: any[] = [];

  ngOnInit() {
    this.buildForm();
  }

  private buildForm() {
    const formGroupFields = this.getFormControlsFields();
    this.dynamicFormGroup = new FormGroup(formGroupFields);
  }

  private getFormControlsFields() {
    const formGroupFields: any = {};
    for (const field of Object.keys(this.model)) {

      const fieldProps = this.model[field];
      const validators: any[] = this.addValidator(fieldProps.rules);

      formGroupFields[field] = new FormControl(fieldProps.value, validators);
      this.fields.push({...fieldProps, fieldName: field});
    }

    return formGroupFields;
  }

  private addValidator(rules: {}) {
    if (!rules) {
      return [];
    }

    const validators = Object.keys(rules).map((rule) => {
      switch (rule) {
        case "required":
          return Validators.required;
          default:
            return []
      }
    });
    return validators;
  }
}