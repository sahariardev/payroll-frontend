import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayheadComponent } from './payhead.component';

describe('PayheadComponent', () => {
  let component: PayheadComponent;
  let fixture: ComponentFixture<PayheadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayheadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
