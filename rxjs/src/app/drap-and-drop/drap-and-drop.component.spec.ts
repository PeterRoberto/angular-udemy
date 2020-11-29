import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrapAndDropComponent } from './drap-and-drop.component';

describe('DrapAndDropComponent', () => {
  let component: DrapAndDropComponent;
  let fixture: ComponentFixture<DrapAndDropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrapAndDropComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrapAndDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
