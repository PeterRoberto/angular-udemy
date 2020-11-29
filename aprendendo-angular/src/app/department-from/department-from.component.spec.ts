import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentFromComponent } from './department-from.component';

describe('DepartmentFromComponent', () => {
  let component: DepartmentFromComponent;
  let fixture: ComponentFixture<DepartmentFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
