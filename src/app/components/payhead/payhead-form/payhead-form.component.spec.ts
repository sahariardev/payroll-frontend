import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayheadFormComponent } from './payhead-form.component';

describe('PayheadFormComponent', () => {
  let component: PayheadFormComponent;
  let fixture: ComponentFixture<PayheadFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayheadFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayheadFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
