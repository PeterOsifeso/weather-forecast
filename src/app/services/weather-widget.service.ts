import {Injectable} from '@angular/core';
import {Forecast, WeatherForecast} from '../shared/models/weather-forecast';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class WeatherWidgetService {
    private cityWeatherForecast: BehaviorSubject<WeatherForecast> = new BehaviorSubject<WeatherForecast>(null);

    constructor() {
    }

    setCityWeatherForecast(cityWeatherForecast: WeatherForecast): void {
        this.cityWeatherForecast.next(cityWeatherForecast);
    }

    getCityWeatherForecast(): Observable<WeatherForecast> {
        return this.cityWeatherForecast.asObservable();
    }

    groupDates(weatherForecast): Array<Array<WeatherForecast>> {
        const groupedForecastDays = [];
        let currentDate = weatherForecast.list[0].dt_txt.split(' ')[0];
        groupedForecastDays[0] = [];
        weatherForecast.list.forEach(
            (data: Forecast, i) => {
                if (currentDate === data.dt_txt.split(' ')[0]) {
                    groupedForecastDays[groupedForecastDays.length - 1].push(data);
                } else {
                    currentDate = data.dt_txt.split(' ')[0];
                    groupedForecastDays.push(weatherForecast.list[i]);
                    groupedForecastDays[groupedForecastDays.length - 1] = [];
                }
            });
        return groupedForecastDays;
    }
}
