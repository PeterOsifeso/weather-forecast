import {Injectable} from '@angular/core';
import {WeatherForecast} from '../shared/models/weather-forecast';
import {OpenWeatherService} from './open-weather.service';

@Injectable({
  providedIn: 'root'
})
export class WeatherWidgetService {
  cityWeatherForecast: WeatherForecast;
  
  constructor(private openWeatherService: OpenWeatherService) {
  }
  
  setCityWeatherForecast(cityWeatherForecast) {
    this.cityWeatherForecast = cityWeatherForecast;
  }
  
  getCityWeatherForecast() {
    return this.cityWeatherForecast;
  }
}
