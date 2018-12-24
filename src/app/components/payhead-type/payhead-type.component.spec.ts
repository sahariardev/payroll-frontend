import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayheadTypeComponent } from './payhead-type.component';

describe('PayheadTypeComponent', () => {
  let component: PayheadTypeComponent;
  let fixture: ComponentFixture<PayheadTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayheadTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayheadTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
