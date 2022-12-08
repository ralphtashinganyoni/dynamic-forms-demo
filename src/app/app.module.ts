import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicErrorComponent } from './dynamic-form/dynamic-error/dynamic-error.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicFieldComponent } from './components/dynamic-field/dynamic-field.component';
import { DynamicSelectComponent } from './components/dynamic-select/dynamic-select.component';
import { DynamicRadioComponent } from './components/dynamic-radio/dynamic-radio.component';
import { DynamicInputComponent } from './components/dynamic-input/dynamic-input.component';
import { DynamicCheckboxComponent } from './components/dynamic-checkbox/dynamic-checkbox.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { DynamicDatetimePickerComponent } from './components/dynamic-datetime-picker/dynamic-datetime-picker.component';


@NgModule({
  declarations: [
    AppComponent,
    DynamicFormComponent,
    DynamicErrorComponent,
    DynamicFieldComponent,
    DynamicSelectComponent,
    DynamicRadioComponent,
    DynamicInputComponent,
    DynamicCheckboxComponent,
    DynamicDatetimePickerComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
