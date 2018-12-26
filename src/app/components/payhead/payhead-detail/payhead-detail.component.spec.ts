import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayheadDetailComponent } from './payhead-detail.component';

describe('PayheadDetailComponent', () => {
  let component: PayheadDetailComponent;
  let fixture: ComponentFixture<PayheadDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayheadDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayheadDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
