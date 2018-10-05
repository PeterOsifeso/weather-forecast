import {Component, Input, OnChanges} from '@angular/core';
import {Forecast, WeatherForecast} from '../../shared/models/weather-forecast';
import {WeatherWidgetService} from '../../services/weather-widget.service';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.scss'],
})
export class WeatherWidgetComponent implements OnChanges {
  // @Input() readonly cityWeatherForecast: WeatherForecast;
  @Input() cityWeatherForecast: WeatherForecast;
  filteredForecastDays: Array<Array<Forecast>>;
  activeDay: Array<Forecast>;
  
  constructor(private  weatherWidgetService: WeatherWidgetService) {
  }
  
  ngOnChanges(): void {
    this.initializeWeatherWidget();
  }
  
  initializeWeatherWidget(): void {
    this.filteredForecastDays = this.weatherWidgetService.filterDates(this.cityWeatherForecast);
    this.activeDay = this.filteredForecastDays[0];
  }
  
  onDaySelect(day: Array<Forecast>): void {
    this.activeDay = day;
  }
}
