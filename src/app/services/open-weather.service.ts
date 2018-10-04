import {Injectable} from '@angular/core';
import {OPEN_WEATHER_API_CONFIG} from '../../environments/environment';
import {Observable} from 'rxjs';
import {debounceTime, map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {WeatherInfo} from '../shared/models/weather-info';
import {WeatherForecast} from '../shared/models/weather-forecast';

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherService {
  private cityWeatherApiUrl = 'https://api.openweathermap.org/data/2.5/weather';
  private cityForecastApiUrl = 'https://api.openweathermap.org/data/2.5/forecast';
  private bBoxForecastApiUrl = 'http://api.openweathermap.org/data/2.5/box/city';
  private pollutionApiUrl = 'http://api.openweathermap.org/pollution/v1/co/';
  constructor(private http: HttpClient) {
  }
  
  getCityWeather(cityName: string): Observable<WeatherInfo> {
    const params = {
      q: cityName,
      appId: OPEN_WEATHER_API_CONFIG.API_KEY
    };
    return this.http.get<WeatherInfo>(this.cityWeatherApiUrl, {params});
  }
  
  getCityForecast(cityName: string): Observable<WeatherForecast> {
    const params = {
      q: cityName,
      appId: OPEN_WEATHER_API_CONFIG.API_KEY,
      units: 'metric'
    };
    return this.http.get<WeatherForecast>(this.cityForecastApiUrl, {params});
  }
  
  getEuropeForecast(): Observable<WeatherForecast> {
    const europeBbox = '-19.160156,37.020098,37.792969,68.592487';
    const params = {
      bbox: europeBbox,
      appId: OPEN_WEATHER_API_CONFIG.API_KEY,
      units: 'metric'
    };
    return this.http.get<WeatherForecast>(this.bBoxForecastApiUrl, {params});
  }
  getBboxForecast(bbox): Observable<WeatherForecast> {
    const params = {
      bbox: bbox,
      units: 'metric',
      appId: OPEN_WEATHER_API_CONFIG.API_KEY
    };
    return this.http.get<WeatherForecast>(this.bBoxForecastApiUrl, {params});
  }
  getPollution(lat: number, lon: number, dateTime: Date): Observable<any> {
    const date = new Date(dateTime.toUTCString());
    this.pollutionApiUrl += `${this.pollutionApiUrl}${lat},${lon}/${date.toISOString()}.json`;
    const params = {
      // location: `${lat},${lon}`,
      // datetime: date.toISOString(),
      appid: OPEN_WEATHER_API_CONFIG.API_KEY,
    };
    return this.http.get(this.pollutionApiUrl, {params});
  }
}
