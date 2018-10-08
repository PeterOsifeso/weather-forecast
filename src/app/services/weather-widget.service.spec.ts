/* tslint:disable*/

import { TestBed } from '@angular/core/testing';
import { WeatherWidgetService } from './weather-widget.service';
import {Forecast, WeatherForecast} from '../shared/models/weather-forecast';

describe('WeatherWidgetService', () => {
  let service: WeatherWidgetService;
  let mockWeather: WeatherForecast = {
    city: {
      id: 1851632,
      name: 'Shuzenji',
      coord: {
        lon: 138.933334, lat: 34.966671
      },
      country: 'JP',
      cod: '200',
      message: 0.0045,
      cnt: 38,
      population: 100,
      list: [{
        dt: 1406106000,
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
        weather: [{
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds', 'icon': '04d'
        }],
        clouds: {'all': 88},
        wind: {
          speed: 5.71,
          deg: 229.501
        },
        sys: {pod: 'd'},
        dt_txt: '2014-07-23 09:00:00'
        }
      ]
    }
  };
  beforeEach(() => {
    TestBed.configureTestingModule({} ),
    service = TestBed.get(WeatherWidgetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  it('should set and get city weather forecast', () => {
    let a: WeatherForecast = mockWeather;
    service.setCityWeatherForecast(a);
    expect(service.getCityWeatherForecast()).toEqual(a);
  });
  
  it('should group a weather forecast by dates', () => {
    let a: any = mockWeather.city.list;
    expect(service.groupDates(mockWeather.city)).toEqual([a]);
  });
});
