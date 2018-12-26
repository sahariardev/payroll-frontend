import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayheadTypeFormComponent } from './payhead-type-form.component';

describe('PayheadTypeFormComponent', () => {
  let component: PayheadTypeFormComponent;
  let fixture: ComponentFixture<PayheadTypeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayheadTypeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayheadTypeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
