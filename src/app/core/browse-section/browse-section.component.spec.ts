import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BrowseSectionComponent} from './browse-section.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {PaginatePipe} from 'ngx-pagination';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {OpenWeatherService} from '../../services/open-weather.service';
import {Observable} from 'rxjs';

describe('BrowseSectionComponent', () => {
  let component: BrowseSectionComponent;
  let fixture: ComponentFixture<BrowseSectionComponent>;
  let mockOpenWeather;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowseSectionComponent, PaginatePipe ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [HttpClientTestingModule],
      providers: [OpenWeatherService]
    })
    .compileComponents();
    mockOpenWeather = TestBed.get(OpenWeatherService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should get europe weather forecast from OpenWeather API on Init ', () => {
    spyOn(mockOpenWeather, 'getBboxForecast').and.returnValue(Observable.create( observer => observer.next({})));
    component.ngOnInit();
    fixture.detectChanges();
    expect(mockOpenWeather.getBboxForecast).toHaveBeenCalled();
  });
  
  it('should get weather details for selected european city onWeatherCardSelect ', () => {
    spyOn(mockOpenWeather, 'getCityForecast').and.returnValue(Observable.create( observer => observer.next({})));
    component.onWeatherCardSelect('');
    expect(mockOpenWeather.getCityForecast).toHaveBeenCalled();
  });
  
  it('should unsubscribe from all subscriptions onDestroy()', () => {
    component.ngOnInit();
    component.onWeatherCardSelect('');
    component.ngOnDestroy();
    expect(component.cityForecastSub.closed).toBeTruthy();
    expect(component.europeForecastSub.closed).toBeTruthy();
  })
});
