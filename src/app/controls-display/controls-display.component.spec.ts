import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlsDisplayComponent } from './controls-display.component';

describe('ControlsDisplayComponent', () => {
  let component: ControlsDisplayComponent;
  let fixture: ComponentFixture<ControlsDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlsDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
