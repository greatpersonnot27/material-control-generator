import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { ControlDbService } from '../control-db.service';
import { ControlsDisplayComponent } from './controls-display.component';

describe('ControlsDisplayComponent', () => {
  let component: ControlsDisplayComponent;
  let fixture: ComponentFixture<ControlsDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ControlsDisplayComponent],
      providers:
      [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {paramMap: {id: '1', get: () => '1'}}
          }
        },
        {
          provide: ControlDbService,
          useValue: {
            controlsDb: ['1'],
            getControl: () => '1'
          }
        }
      ]
    }).compileComponents();
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
      type: 'Button',
      x: 10,
      y: 20,
      width: 80,
      height: 40,
      text: 'Button',
    };
    const fixture = TestBed.createComponent(ControlsDisplayComponent);
    const jsonLoader = fixture.componentInstance;
    expect(jsonLoader.generateCss(cssParams)).toEqual({
      height: '40px',
      left: '10px',
      position: 'absolute',
      top: '20px',
      width: '80px',
    });
  });
});
