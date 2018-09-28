import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherRightComponent } from './weather-right.component';

describe('WeatherRightComponent', () => {
  let component: WeatherRightComponent;
  let fixture: ComponentFixture<WeatherRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
