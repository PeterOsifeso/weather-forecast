import {Component, Input, OnChanges } from '@angular/core';
import {Forecast, WeatherForecast} from '../../shared/models/weather-forecast';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.scss'],
})
export class WeatherWidgetComponent implements OnChanges {
  @Input() readonly cityWeatherForecast: WeatherForecast;
  filteredForecastDays: Array<Array<Forecast>>;
  activeDay: Array<Forecast>;
  constructor() {
  }

  ngOnChanges(): void {
    this.initializeWeatherWidget();
  }

  initializeWeatherWidget(): void {
    this.filterDatesHack(this.cityWeatherForecast);
    this.activeDay = this.filteredForecastDays[0];
  }

  onDaySelect(day: Array<Forecast>): void {
    this.activeDay = day;
  }

  filterDatesHack(weatherForecast): void {
    this.filteredForecastDays = [];
    let currentDate = weatherForecast.list[0].dt_txt.split(' ')[0];
    this.filteredForecastDays[0] = [];
    weatherForecast.list.forEach(
      (data: Forecast, i) => {
        if (currentDate === data.dt_txt.split(' ')[0]) {
          this.filteredForecastDays[this.filteredForecastDays.length - 1].push(data);
        } else {
          currentDate = data.dt_txt.split(' ')[0];
          this.filteredForecastDays.push(weatherForecast.list[i]);
          this.filteredForecastDays[this.filteredForecastDays.length - 1] = [];
        }
      });
    // TODO - remove console log and try to find a better way to do this
    // console.log('New Format of forecast for days', this.filteredForecastDays);
  }
}
