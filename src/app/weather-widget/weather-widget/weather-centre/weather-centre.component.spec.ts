import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherCentreComponent } from './weather-centre.component';

describe('WeatherCentreComponent', () => {
  let component: WeatherCentreComponent;
  let fixture: ComponentFixture<WeatherCentreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherCentreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherCentreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
