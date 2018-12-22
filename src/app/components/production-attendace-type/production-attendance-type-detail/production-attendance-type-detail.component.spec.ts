import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionAttendanceTypeDetailComponent } from './production-attendance-type-detail.component';

describe('ProductionAttendanceTypeDetailComponent', () => {
  let component: ProductionAttendanceTypeDetailComponent;
  let fixture: ComponentFixture<ProductionAttendanceTypeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionAttendanceTypeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionAttendanceTypeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
