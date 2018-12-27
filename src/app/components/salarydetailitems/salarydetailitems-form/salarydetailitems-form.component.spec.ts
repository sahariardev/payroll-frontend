import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalarydetailitemsFormComponent } from './salarydetailitems-form.component';

describe('SalarydetailitemsFormComponent', () => {
  let component: SalarydetailitemsFormComponent;
  let fixture: ComponentFixture<SalarydetailitemsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalarydetailitemsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalarydetailitemsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
