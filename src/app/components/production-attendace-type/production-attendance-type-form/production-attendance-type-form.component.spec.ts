import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionAttendanceTypeFormComponent } from './production-attendance-type-form.component';

describe('ProductionAttendanceTypeFormComponent', () => {
  let component: ProductionAttendanceTypeFormComponent;
  let fixture: ComponentFixture<ProductionAttendanceTypeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionAttendanceTypeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionAttendanceTypeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
