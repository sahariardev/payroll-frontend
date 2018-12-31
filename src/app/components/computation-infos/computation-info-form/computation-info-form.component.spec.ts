import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputationInfoFormComponent } from './computation-info-form.component';

describe('ComputationInfoFormComponent', () => {
  let component: ComputationInfoFormComponent;
  let fixture: ComponentFixture<ComputationInfoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComputationInfoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputationInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
