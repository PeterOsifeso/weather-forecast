import {async, TestBed} from '@angular/core/testing';

import { OpenWeatherService } from './open-weather.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {HttpClient} from '@angular/common/http';

describe('OpenWeatherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: []
    });
    
   }
  );
  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    let httpTestingController = TestBed.get(HttpTestingController);
    let httpClient = TestBed.get(HttpClient);
  });
  
  

  it('should be created', () => {
    const service: OpenWeatherService = TestBed.get(OpenWeatherService);
    expect(service).toBeTruthy();
  });
});
