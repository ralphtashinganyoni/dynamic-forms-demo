import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicDatetimePickerComponent } from './dynamic-datetime-picker.component';

describe('DynamicDatetimePickerComponent', () => {
  let component: DynamicDatetimePickerComponent;
  let fixture: ComponentFixture<DynamicDatetimePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicDatetimePickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicDatetimePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
