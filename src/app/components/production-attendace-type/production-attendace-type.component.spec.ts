import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionAttendaceTypeComponent } from './production-attendace-type.component';

describe('ProductionAttendaceTypeComponent', () => {
  let component: ProductionAttendaceTypeComponent;
  let fixture: ComponentFixture<ProductionAttendaceTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionAttendaceTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionAttendaceTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
