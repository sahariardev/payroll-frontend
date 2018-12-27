import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalarydetailitemsDetailComponent } from './salarydetailitems-detail.component';

describe('SalarydetailitemsDetailComponent', () => {
  let component: SalarydetailitemsDetailComponent;
  let fixture: ComponentFixture<SalarydetailitemsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalarydetailitemsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalarydetailitemsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
