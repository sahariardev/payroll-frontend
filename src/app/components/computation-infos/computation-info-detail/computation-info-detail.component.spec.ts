import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputationInfoDetailComponent } from './computation-info-detail.component';

describe('ComputationInfoDetailComponent', () => {
  let component: ComputationInfoDetailComponent;
  let fixture: ComponentFixture<ComputationInfoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComputationInfoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputationInfoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
