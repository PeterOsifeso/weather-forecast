import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSectionComponent } from './search-section.component';
import {ReactiveFormsModule} from '@angular/forms';
import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {Observable, of} from 'rxjs';
import {OpenWeatherService} from '../../services/open-weather.service';

describe('SearchSectionComponent', () => {
  let component: SearchSectionComponent;
  let fixture: ComponentFixture<SearchSectionComponent>;
  let mockOpenWeather: OpenWeatherService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchSectionComponent ],
      imports: [ReactiveFormsModule, HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [OpenWeatherService]
    })
    .compileComponents();
    mockOpenWeather = TestBed.get(OpenWeatherService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should create and initialize search form on init', () => {
    expect(component.form).toBeTruthy();
    expect(component.form.value).toEqual({city: 'New York'});
  });
  
  it('should call searchCity() on init', () => {
    spyOn(component, 'searchCity');
    expect(component.searchCity).toHaveBeenCalledTimes(0);
    component.ngOnInit();
    expect(component.searchCity).toHaveBeenCalledTimes(1);
  });
  
  it('should get search city from Open Weather Service on searchCity()', () => {
    spyOn(mockOpenWeather, 'getCityForecast').and.returnValue(of({}) );
    expect(mockOpenWeather.getCityForecast).toHaveBeenCalledTimes(0);
    component.searchCity('New York');
    expect(mockOpenWeather.getCityForecast).toHaveBeenCalledTimes(1);
  });
  
  it('should display error message if city not found from Open Weather Service on searchCity()', () => {
    spyOn(mockOpenWeather, 'getCityForecast').and.returnValue( Observable.create(observer => observer.error({error: {message: 'City Not Found'}})));
    expect(component.searchError).toBeUndefined();
    component.searchCity('New Rork');
    fixture.detectChanges();
    expect(component.searchError).toBe('New Rork' + ' ' + 'City Not Found');
  });
  
  it('should unsubscribe from all observables on component destroy', () => {
    component.ngOnDestroy();
    expect(component.cityForecastSub.closed).toBeTruthy();
  })
});
