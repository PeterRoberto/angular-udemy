import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabindingStringInterpolationComponent } from './databinding-string-interpolation.component';

describe('DatabindingStringInterpolationComponent', () => {
  let component: DatabindingStringInterpolationComponent;
  let fixture: ComponentFixture<DatabindingStringInterpolationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatabindingStringInterpolationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabindingStringInterpolationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
