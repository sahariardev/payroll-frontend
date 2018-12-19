import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesDetailViewComponent } from './employees-detail-view.component';

describe('EmployeesDetailViewComponent', () => {
  let component: EmployeesDetailViewComponent;
  let fixture: ComponentFixture<EmployeesDetailViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeesDetailViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
