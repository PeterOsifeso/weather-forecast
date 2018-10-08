import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {WeatherWidgetComponent} from './weather-widget.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {WeatherWidgetService} from '../../services/weather-widget.service';

describe('WeatherWidgetComponent', () => {
  let component: WeatherWidgetComponent;
  let fixture: ComponentFixture<WeatherWidgetComponent>;
  let mockWeatherWidgetService: WeatherWidgetService;
 
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherWidgetComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
    mockWeatherWidgetService = TestBed.get(WeatherWidgetService);
  }));
  
  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherWidgetComponent);
    component = fixture.componentInstance;
    
    component.cityWeatherForecast = {
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
    fixture.detectChanges();
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should re-initialize weather widget on Input value change', () => {
    spyOn(component, 'initializeWeatherWidget');
    component.ngOnChanges();
    expect(component.initializeWeatherWidget).toHaveBeenCalled();
  });
  
  it('initialize weather widget should group days for forecast', () => {
    spyOn(mockWeatherWidgetService, 'groupDates').and.returnValue([[component.cityWeatherForecast]]);
    expect(component.groupedForecastDays).toBeUndefined();
    component.initializeWeatherWidget();
    expect(mockWeatherWidgetService.groupDates).toHaveBeenCalled();
    expect(component.groupedForecastDays).toContain([component.cityWeatherForecast]);
    expect(component.activeDay).toEqual([component.cityWeatherForecast]);
  });
  
  it('should change active day on day select()', () => {
    expect(component.activeDay).toBeUndefined();
    component.onDaySelect([]);
    expect(component.activeDay).toBeDefined();
    expect(component.activeDay).toEqual([]);
  });
});
