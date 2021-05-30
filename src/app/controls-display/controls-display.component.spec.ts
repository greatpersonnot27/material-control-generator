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

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should return css style object`, () => {
    let cssParams = {
      "type": "Button",
      "x": 10,
      "y": 20,
      "width": 80,
      "height": 40,
      "text": "Button"
      }
    const fixture = TestBed.createComponent(ControlsDisplayComponent);
    const jsonLoader = fixture.componentInstance;
    expect(jsonLoader.generateCss(cssParams)).toEqual({height: "40px", left: "10px", position: "absolute", top: "20px", width: "80px"});
  });

});
