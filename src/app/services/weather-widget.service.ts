import {Injectable} from '@angular/core';
import {Forecast, WeatherForecast} from '../shared/models/weather-forecast';

@Injectable({
  providedIn: 'root'
})
export class WeatherWidgetService {
  private cityWeatherForecast: WeatherForecast;
  
  constructor() {
  }
  
  setCityWeatherForecast(cityWeatherForecast) {
    this.cityWeatherForecast = cityWeatherForecast;
  }
  
  getCityWeatherForecast() {
    return this.cityWeatherForecast;
  }
  
  filterDates(weatherForecast): Array<Forecast[]> {
    const filteredForecastDays = [];
    let currentDate = weatherForecast.list[0].dt_txt.split(' ')[0];
    filteredForecastDays[0] = [];
    weatherForecast.list.forEach(
      (data: Forecast, i) => {
        if (currentDate === data.dt_txt.split(' ')[0]) {
          filteredForecastDays[filteredForecastDays.length - 1].push(data);
        } else {
          currentDate = data.dt_txt.split(' ')[0];
          filteredForecastDays.push(weatherForecast.list[i]);
          filteredForecastDays[filteredForecastDays.length - 1] = [];
        }
      });
    return filteredForecastDays;
  }
}
