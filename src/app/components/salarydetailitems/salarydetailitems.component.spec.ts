import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalarydetailitemsComponent } from './salarydetailitems.component';

describe('SalarydetailitemsComponent', () => {
  let component: SalarydetailitemsComponent;
  let fixture: ComponentFixture<SalarydetailitemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalarydetailitemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalarydetailitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
