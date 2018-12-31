import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputationInfosComponent } from './computation-infos.component';

describe('ComputationInfosComponent', () => {
  let component: ComputationInfosComponent;
  let fixture: ComponentFixture<ComputationInfosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComputationInfosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputationInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
