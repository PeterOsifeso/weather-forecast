import { TestBed } from '@angular/core/testing';

import { WeatherWidgetService } from './weather-widget.service';

describe('WeatherWidgetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WeatherWidgetService = TestBed.get(WeatherWidgetService);
    expect(service).toBeTruthy();
  });
});
