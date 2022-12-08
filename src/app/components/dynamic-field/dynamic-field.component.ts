import { AfterViewInit, ChangeDetectorRef, Component, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { DynamicCheckboxComponent } from '../dynamic-checkbox/dynamic-checkbox.component';
import { DynamicDatetimePickerComponent } from '../dynamic-datetime-picker/dynamic-datetime-picker.component';
import { DynamicInputComponent } from '../dynamic-input/dynamic-input.component';
import { DynamicRadioComponent } from '../dynamic-radio/dynamic-radio.component';
import { DynamicSelectComponent } from '../dynamic-select/dynamic-select.component';

@Component({
  selector: 'app-dynamic-field',
  templateUrl: './dynamic-field.component.html',
  styleUrls: ['./dynamic-field.component.css']
})
export class DynamicFieldComponent implements AfterViewInit{

  supportedDynamicComponents = [
    {
      name: 'text',
      component: DynamicInputComponent
    },
    {
      name: 'number',
      component: DynamicInputComponent
    },
    {
      name: 'select',
      component: DynamicSelectComponent
    },
    {
      name: 'checkbox',
      component: DynamicCheckboxComponent
    },
    {
      name: 'date',
      component: DynamicDatetimePickerComponent
    },
    {
      name: 'radio',
      component: DynamicRadioComponent
    }
  ]
  @ViewChild('dynamicInputContainer', { read: ViewContainerRef}) dynamicInputContainer!: ViewContainerRef;
  @Input() field: any;
  formName!: FormGroup;

  constructor(private formgroupDirective: FormGroupDirective, private cd: ChangeDetectorRef) {

  }

  ngAfterViewInit(): void {
    this.registerDynamicField();
  }

  private registerDynamicField() {
    this.dynamicInputContainer.clear();
    const componentInstance = this.getComponentByType(this.field.type)
    const dynamicComponent = this.dynamicInputContainer.createComponent(componentInstance)
    dynamicComponent.setInput('field', this.field);
    this.cd.detectChanges();
  }

  getComponentByType(type: string): any {
    console.log(type)
    let componentDynamic = this.supportedDynamicComponents.find(c => c.name === type);
    return componentDynamic?.component || DynamicInputComponent;
  }

}
