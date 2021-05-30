import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { JsonLoaderComponent } from './json-loader.component';

describe('JsonLoaderComponent', () => {
  let component: JsonLoaderComponent;
  let fixture: ComponentFixture<JsonLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ JsonLoaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should disable button at first`, () => {
    const fixture = TestBed.createComponent(JsonLoaderComponent);
    const jsonLoader = fixture.componentInstance;
    expect(jsonLoader.buttonStatus).toEqual(true);
  });
});
