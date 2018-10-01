import {Injectable} from '@angular/core';
import {OPEN_WEATHER_API_CONFIG} from '../../environments/environment';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {WeatherInfo} from '../shared/models/weather-info';
import {Forecast, WeatherForecast} from '../shared/models/weather-forecast';

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherService {
  private cityWeatherApiUrl = 'https://api.openweathermap.org/data/2.5/weather';
  private cityForecastApiUrl = 'https://api.openweathermap.org/data/2.5/forecast';
  private severalForecastApiUrl = 'http://api.openweathermap.org/data/2.5/box/city';

  constructor(private http: HttpClient) {
  }

  getCityWeather(cityName: string): Observable<any> {
    const params = {
      q: cityName,
      appId: OPEN_WEATHER_API_CONFIG.API_KEY
    };
    return this.http.get(this.cityWeatherApiUrl, {params});
  }

  getCityForecast(cityName: string): Observable<any> {
    const params = {
      q: cityName,
      appId: OPEN_WEATHER_API_CONFIG.API_KEY
    };
    return this.http.get(this.cityForecastApiUrl, {params});
  }

  getEuropeForecast(): Observable<any> {
    const europeBbox = '-31.2660,27.6363,39.8693,81.0088';
    const params = {
      bbox: europeBbox,
      appId: OPEN_WEATHER_API_CONFIG.API_KEY
    };
    return this.http.get(this.severalForecastApiUrl, {params});
  }

  filterDatesHack(weatherForecast): Array<Array<Forecast>> {
    const filteredForecastDays = [];
    // this.filteredForecastDays = [];
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
    // TODO - remove console log and try to find a better way to do this
    // console.log('New Format of forecast for days', this.filteredForecastDays);
    return filteredForecastDays;
  }
}
