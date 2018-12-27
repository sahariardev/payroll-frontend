import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalarydetailComponent } from './salarydetail.component';

describe('SalarydetailComponent', () => {
  let component: SalarydetailComponent;
  let fixture: ComponentFixture<SalarydetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalarydetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalarydetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
