import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapSectionComponent } from './map-section.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {OpenWeatherService} from '../../services/open-weather.service';
import Spy = jasmine.Spy;
import {Observable} from 'rxjs';

describe('MapSectionComponent', () => {
  let component: MapSectionComponent;
  let fixture: ComponentFixture<MapSectionComponent>;
  let mockOpenWeather: OpenWeatherService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapSectionComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [HttpClientTestingModule],
      providers: [OpenWeatherService]
    })
    .compileComponents();
    mockOpenWeather = TestBed.get(OpenWeatherService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should set map zoom with value on setZoom()', () => {
    component.setZoom(5);
    expect(component.zoom).toEqual(5);
  });
  
  it('should get cities in bounding box from open weather service ', () => {
    spyOn(mockOpenWeather, 'getBboxForecast').and.returnValue( Observable.create(observer => observer.next({})));
    component.getCitiesInBounds();
    expect(mockOpenWeather.getBboxForecast).toHaveBeenCalled();
  });
  
  it('should close subscription onDestroy', () => {
    component.ngOnDestroy();
    if(component.bBoxSub)
      expect(component.bBoxSub.closed).toBeTruthy();
    else
    expect(component.bBoxSub).toBeUndefined()
  });
});
