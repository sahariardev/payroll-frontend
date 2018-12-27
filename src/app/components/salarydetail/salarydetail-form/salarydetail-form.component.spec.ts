import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalarydetailFormComponent } from './salarydetail-form.component';

describe('SalarydetailFormComponent', () => {
  let component: SalarydetailFormComponent;
  let fixture: ComponentFixture<SalarydetailFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalarydetailFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalarydetailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
