import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {WeatherRowComponent} from './weather-row.component';
import {UtcDateToRegularPipe} from '../../../shared/pipes/utc-date-to-regular.pipe';

describe('WeatherRowComponent', () => {
  let component: WeatherRowComponent;
  let fixture: ComponentFixture<WeatherRowComponent>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherRowComponent, UtcDateToRegularPipe]
    }).compileComponents();
  }));
  
  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherRowComponent);
    component = fixture.componentInstance;
    let stub = {
      clouds: {all: 0},
      dt: 1538665200,
      dt_txt: '2018-10-04 15:00:00',
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
        pod: 'd'
      },
      weather: [{id: 800, main: 'Clear', description: 'clear sky', icon: '01d'}],
      wind: {
        speed: 2.92,
        deg: 204.502
      }
    };

    component.day = [stub];
    fixture.detectChanges();
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should emit the active day onRowClick()', () => {
    spyOn(component.active, 'emit');
    component.onRowClick();
    expect(component.active.emit).toHaveBeenCalled();
  });
});
