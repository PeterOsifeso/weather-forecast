import { Injectable } from '@angular/core';
import { OPEN_WEATHER_API_CONFIG } from '../../environments/environment';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {WeatherInfo} from '../shared/models/weather-info';
import {WeatherForecast} from '../shared/models/weather-forecast';

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherService {
  private getCityWeatherApiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';
  private getCityForecastApiUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=';
  constructor(private http: HttpClient) { }
  getCityWeather(cityName: string): Observable<any> {
    const city = cityName.split(' ').join(',');
    const url = this.getCityWeatherApiUrl + city + '&appid=' + OPEN_WEATHER_API_CONFIG.API_KEY;
    return this.http.get(url);
  }
  getCityForecast(cityName: string): Observable<any> {
    const city = cityName.split(' ').join(',');
    const url = this.getCityForecastApiUrl + city + '&appid=' + OPEN_WEATHER_API_CONFIG.API_KEY;
    return this.http.get(url);
  }
}
