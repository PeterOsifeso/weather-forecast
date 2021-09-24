import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {WeatherCentreComponent} from './weather-centre.component';

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
    let stub = {
      clouds: {all: 0},
      dt: 1538665200,
      dt_txt: "2018-10-04 15:00:00",
      main: {
        temp: 298.77,
        temp_min: 298.77,
        temp_max: 298.774,
        pressure: 1005.93,
        sea_level: 1018.18,
        grnd_level: 1005.93,
        humidity: 87,
        temp_kf: 0.26
      },
      sys: {
        pod: "d"
      },
      weather: [{id: 800, main: "Clear", description: "clear sky", icon: "01d"}],
      wind: {
        speed: 2.92,
        deg: 204.502
      }
    };
    component = fixture.componentInstance;
    component.activeDay = [];
    component.activeDay.push(stub);
    fixture.detectChanges();
  });

  it('should create', () => {
    // fixture.detectChanges();
    console.log(component.activeDay[0]);
    expect(component).toBeTruthy();
  });
});
