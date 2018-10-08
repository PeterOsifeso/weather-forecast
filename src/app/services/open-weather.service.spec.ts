import {async, fakeAsync, TestBed, tick} from '@angular/core/testing';

import { OpenWeatherService } from './open-weather.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {HttpClient} from '@angular/common/http';
import {OPEN_WEATHER_API_CONFIG} from '../../environments/environment';
import {BboxForecast, BboxForecasts} from '../shared/models/bbox-forecast';

describe('OpenWeatherService', () => {
  let httpTestingController;
  let httpClient;
  let httpMock;
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
    httpTestingController = TestBed.get(HttpTestingController);
    httpClient = TestBed.get(HttpClient);
    httpMock = TestBed.get(HttpTestingController);
  });
  
  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    const service: OpenWeatherService = TestBed.get(OpenWeatherService);
    expect(service).toBeTruthy();
  });
  
  it('should getCityForecast from API',() => {
    const service: OpenWeatherService = TestBed.get(OpenWeatherService);
    const dummyForecast = {
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
    service.getCityForecast('New York').subscribe(
      forecast => {
        expect(forecast).toEqual(dummyForecast);
      }
    );
    const req = httpMock.expectOne(`https://api.openweathermap.org/data/2.5/forecast?q=New%20York&units=metric&appId=${OPEN_WEATHER_API_CONFIG.API_KEY}`);
    expect(req.request.method).toBe("GET");
    req.flush(dummyForecast);
  });
  
  
  it('should getBboxForecast from API',() => {
    const service: OpenWeatherService = TestBed.get(OpenWeatherService);
    const europeBbox = '-19.160156,37.020098,37.792969,68.592487';
    const dummyBboxForecast: BboxForecasts = {
      "cod": "200",
      "calctime": 0.3107,
      "cnt": 15,
      "list": [
        {
          "id": 2208791,
          "name": "Yafran",
          "coord": {
            "lon": 12.52859,
            "lat": 32.06329
          },
          "main": {
            "temp": 9.68,
            "temp_min": 9.681,
            "temp_max": 9.681,
            "pressure": 961.02,
            "sea_level": 1036.82,
            "grnd_level": 961.02,
            "humidity": 85
          },
          "dt": 1485784982,
          "wind": {
            "speed": 3.96,
            "deg": 356.5
          },
          "rain": {
            "3h": 0.255
          },
          "clouds": {
            "all": 88
          },
          "weather": [
            {
              "id": 500,
              "main": "Rain",
              "description": "light rain",
              "icon": "10d"
            }
          ]
        },
        {
          "id": 2208425,
          "name": "Zuwarah",
          "coord": {
            "lon": 12.08199,
            "lat": 32.931198
          },
          "main": {
            "temp": 15.36,
            "temp_min": 15.356,
            "temp_max": 15.356,
            "pressure": 1036.81,
            "sea_level": 1037.79,
            "grnd_level": 1036.81,
            "humidity": 89
          },
          "dt": 1485784982,
          "wind": {
            "speed": 5.46,
            "deg": 30.0002
          },
          "clouds": {
            "all": 56
          },
          "weather": [
            {
              "id": 803,
              "main": "Clouds",
              "description": "broken clouds",
              "icon": "04d"
            }
          ]
        },
        {
          "id": 2212771,
          "name": "Sabratah",
          "coord": {
            "lon": 12.48845,
            "lat": 32.79335
          },
          "main": {
            "temp": 15.31,
            "temp_min": 15.306,
            "temp_max": 15.306,
            "pressure": 1037.05,
            "sea_level": 1037.55,
            "grnd_level": 1037.05,
            "humidity": 100
          },
          "dt": 1485784982,
          "wind": {
            "speed": 6.71,
            "deg": 28.5002
          },
          "clouds": {
            "all": 92
          },
          "weather": [
            {
              "id": 804,
              "main": "Clouds",
              "description": "overcast clouds",
              "icon": "04d"
            }
          ]
        },
        {
          "id": 2217362,
          "name": "Gharyan",
          "coord": {
            "lon": 13.02028,
            "lat": 32.172218
          },
          "main": {
            "temp": 11.23,
            "temp_min": 11.231,
            "temp_max": 11.231,
            "pressure": 1004.23,
            "sea_level": 1037.06,
            "grnd_level": 1004.23,
            "humidity": 90
          },
          "dt": 1485784982,
          "wind": {
            "speed": 3.86,
            "deg": 16.5002
          },
          "rain": {
            "3h": 1.29
          },
          "clouds": {
            "all": 92
          },
          "weather": [
            {
              "id": 500,
              "main": "Rain",
              "description": "light rain",
              "icon": "10d"
            }
          ]
        },
        {
          "id": 2216885,
          "name": "Zawiya",
          "coord": {
            "lon": 12.72778,
            "lat": 32.75222
          },
          "main": {
            "temp": 17,
            "pressure": 1024,
            "humidity": 55,
            "temp_min": 17,
            "temp_max": 17
          },
          "dt": 1485784982,
          "wind": {
            "speed": 3.6,
            "deg": 10
          },
          "clouds": {
            "all": 40
          },
          "weather": [
            {
              "id": 802,
              "main": "Clouds",
              "description": "scattered clouds",
              "icon": "03d"
            }
          ]
        },
        {
          "id": 2210247,
          "name": "Tripoli",
          "coord": {
            "lon": 13.18746,
            "lat": 32.875191
          },
          "main": {
            "temp": 16,
            "pressure": 1025,
            "humidity": 59,
            "temp_min": 16,
            "temp_max": 16
          },
          "dt": 1485781822,
          "wind": {
            "speed": 3.6,
            "deg": 360
          },
          "clouds": {
            "all": 40
          },
          "weather": [
            {
              "id": 802,
              "main": "Clouds",
              "description": "scattered clouds",
              "icon": "03d"
            }
          ]
        },
        {
          "id": 2210221,
          "name": "Tarhuna",
          "coord": {
            "lon": 13.6332,
            "lat": 32.43502
          },
          "main": {
            "temp": 17,
            "pressure": 1024,
            "humidity": 55,
            "temp_min": 17,
            "temp_max": 17
          },
          "dt": 1485784982,
          "wind": {
            "speed": 3.6,
            "deg": 10
          },
          "clouds": {
            "all": 40
          },
          "weather": [
            {
              "id": 802,
              "main": "Clouds",
              "description": "scattered clouds",
              "icon": "03d"
            }
          ]
        },
        {
          "id": 2215163,
          "name": "Masallatah",
          "coord": {
            "lon": 14,
            "lat": 32.616669
          },
          "main": {
            "temp": 12.86,
            "temp_min": 12.856,
            "temp_max": 12.856,
            "pressure": 1000.17,
            "sea_level": 1036.49,
            "grnd_level": 1000.17,
            "humidity": 73
          },
          "dt": 1485784982,
          "wind": {
            "speed": 4.81,
            "deg": 16.5002
          },
          "rain": {
            "3h": 0.39
          },
          "clouds": {
            "all": 88
          },
          "weather": [
            {
              "id": 500,
              "main": "Rain",
              "description": "light rain",
              "icon": "10d"
            }
          ]
        },
        {
          "id": 2219905,
          "name": "Al Khums",
          "coord": {
            "lon": 14.26191,
            "lat": 32.648609
          },
          "main": {
            "temp": 15.18,
            "temp_min": 15.181,
            "temp_max": 15.181,
            "pressure": 1023.35,
            "sea_level": 1036.01,
            "grnd_level": 1023.35,
            "humidity": 73
          },
          "dt": 1485784982,
          "wind": {
            "speed": 5.26,
            "deg": 26.0002
          },
          "clouds": {
            "all": 88
          },
          "weather": [
            {
              "id": 804,
              "main": "Clouds",
              "description": "overcast clouds",
              "icon": "04d"
            }
          ]
        },
        {
          "id": 2208485,
          "name": "Zlitan",
          "coord": {
            "lon": 14.56874,
            "lat": 32.467381
          },
          "main": {
            "temp": 15.18,
            "temp_min": 15.181,
            "temp_max": 15.181,
            "pressure": 1023.35,
            "sea_level": 1036.01,
            "grnd_level": 1023.35,
            "humidity": 73
          },
          "dt": 1485784982,
          "wind": {
            "speed": 5.26,
            "deg": 26.0002
          },
          "clouds": {
            "all": 88
          },
          "weather": [
            {
              "id": 804,
              "main": "Clouds",
              "description": "overcast clouds",
              "icon": "04d"
            }
          ]
        },
        {
          "id": 2563191,
          "name": "Birkirkara",
          "coord": {
            "lon": 14.46111,
            "lat": 35.897221
          },
          "main": {
            "temp": 14,
            "pressure": 1023,
            "humidity": 62,
            "temp_min": 14,
            "temp_max": 14
          },
          "dt": 1485784991,
          "wind": {
            "speed": 4.1,
            "deg": 10,
            "var_beg": 330,
            "var_end": 30
          },
          "clouds": {
            "all": 40
          },
          "weather": [
            {
              "id": 802,
              "main": "Clouds",
              "description": "scattered clouds",
              "icon": "03d"
            }
          ]
        },
        {
          "id": 2523650,
          "name": "Ragusa",
          "coord": {
            "lon": 14.71719,
            "lat": 36.928242
          },
          "main": {
            "temp": 14.54,
            "pressure": 1022,
            "humidity": 50,
            "temp_min": 13,
            "temp_max": 16
          },
          "dt": 1485781816,
          "wind": {
            "speed": 3.1,
            "deg": 20,
            "var_beg": 350,
            "var_end": 60
          },
          "clouds": {
            "all": 20
          },
          "weather": [
            {
              "id": 801,
              "main": "Clouds",
              "description": "few clouds",
              "icon": "02d"
            }
          ]
        },
        {
          "id": 2523693,
          "name": "Pozzallo",
          "coord": {
            "lon": 14.84989,
            "lat": 36.730541
          },
          "main": {
            "temp": 14,
            "pressure": 1022,
            "humidity": 50,
            "temp_min": 14,
            "temp_max": 14
          },
          "dt": 1485781816,
          "wind": {
            "speed": 3.1,
            "deg": 20,
            "var_beg": 350,
            "var_end": 60
          },
          "clouds": {
            "all": 20
          },
          "weather": [
            {
              "id": 801,
              "main": "Clouds",
              "description": "few clouds",
              "icon": "02d"
            }
          ]
        },
        {
          "id": 2524119,
          "name": "Modica",
          "coord": {
            "lon": 14.77399,
            "lat": 36.84594
          },
          "main": {
            "temp": 15.74,
            "pressure": 1022,
            "humidity": 47,
            "temp_min": 14,
            "temp_max": 17
          },
          "dt": 1485785168,
          "wind": {
            "speed": 2.1,
            "deg": 0
          },
          "clouds": {
            "all": 40
          },
          "weather": [
            {
              "id": 802,
              "main": "Clouds",
              "description": "scattered clouds",
              "icon": "03d"
            }
          ]
        },
        {
          "id": 2523581,
          "name": "Rosolini",
          "coord": {
            "lon": 14.94779,
            "lat": 36.824242
          },
          "main": {
            "temp": 15.62,
            "pressure": 1022,
            "humidity": 47,
            "temp_min": 14,
            "temp_max": 17
          },
          "dt": 1485784979,
          "wind": {
            "speed": 2.1,
            "deg": 0
          },
          "clouds": {
            "all": 40
          },
          "weather": [
            {
              "id": 802,
              "main": "Clouds",
              "description": "scattered clouds",
              "icon": "03d"
            }
          ]
        }
      ]
    };
    service.getBboxForecast(europeBbox).subscribe(
      forecast => {
        expect(forecast).toEqual(dummyBboxForecast);
      }
    );
    const req = httpMock.expectOne(`http://api.openweathermap.org/data/2.5/box/city?bbox=${europeBbox}&units=metric&appId=${OPEN_WEATHER_API_CONFIG.API_KEY}`);
    expect(req.request.method).toBe("GET");
    req.flush(dummyBboxForecast);
  });
});
