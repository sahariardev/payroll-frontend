import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalarydetailDetailComponent } from './salarydetail-detail.component';

describe('SalarydetailDetailComponent', () => {
  let component: SalarydetailDetailComponent;
  let fixture: ComponentFixture<SalarydetailDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalarydetailDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalarydetailDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
