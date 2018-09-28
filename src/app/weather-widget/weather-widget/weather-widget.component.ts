import {Component, Input, OnInit} from '@angular/core';
import {WeatherInfo} from '../../shared/models/weather-info';
import {Forecast, WeatherForecast} from '../../shared/models/weather-forecast';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.scss']
})
export class WeatherWidgetComponent implements OnInit {
  @Input() cityWeatherForecast: Array<Forecast>;
  constructor() { }

  ngOnInit() {
    console.log('filtered', this.cityWeatherForecast);
  }

}
