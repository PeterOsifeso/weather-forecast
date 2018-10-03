import {Injectable} from '@angular/core';
import {OPEN_WEATHER_API_CONFIG} from '../../environments/environment';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {WeatherInfo} from '../shared/models/weather-info';
import {WeatherForecast} from '../shared/models/weather-forecast';

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherService {
  private cityWeatherApiUrl = 'https://api.openweathermap.org/data/2.5/weather';
  private cityForecastApiUrl = 'https://api.openweathermap.org/data/2.5/forecast';
  private severalForecastApiUrl = 'http://api.openweathermap.org/data/2.5/box/city';
  
  constructor(private http: HttpClient) {
  }
  
  getCityWeather(cityName: string): Observable<WeatherInfo> {
    const params = {
      q: cityName,
      appId: OPEN_WEATHER_API_CONFIG.API_KEY
    };
    return this.http.get(this.cityWeatherApiUrl, {params}).pipe(map((res: WeatherInfo) => res));
  }
  
  getCityForecast(cityName: string): Observable<WeatherForecast> {
    const params = {
      q: cityName,
      appId: OPEN_WEATHER_API_CONFIG.API_KEY,
      units: 'metric'
    };
    return this.http.get(this.cityForecastApiUrl, {params}).pipe(map((res: WeatherForecast) => res));
  }
  
  getEuropeForecast(): Observable<WeatherForecast> {
    const europeBbox = '-19.160156,37.020098,37.792969,68.592487';
    const params = {
      bbox: europeBbox,
      appId: OPEN_WEATHER_API_CONFIG.API_KEY,
      units: 'metric'
    };
    return this.http.get(this.severalForecastApiUrl, {params}).pipe(map((res: WeatherForecast) => res));
  }
}
