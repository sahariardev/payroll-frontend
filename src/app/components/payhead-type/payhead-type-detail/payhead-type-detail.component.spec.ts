import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayheadTypeDetailComponent } from './payhead-type-detail.component';

describe('PayheadTypeDetailComponent', () => {
  let component: PayheadTypeDetailComponent;
  let fixture: ComponentFixture<PayheadTypeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayheadTypeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayheadTypeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
