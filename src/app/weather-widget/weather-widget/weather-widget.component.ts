import {Component, Input, OnChanges} from '@angular/core';
import {WeatherForecast} from '../../shared/models/weather-forecast';
import {WeatherWidgetService} from '../../services/weather-widget.service';

@Component({
    selector: 'app-weather-widget',
    templateUrl: './weather-widget.component.html',
    styleUrls: ['./weather-widget.component.scss'],
})
export class WeatherWidgetComponent implements OnChanges {
    @Input() readonly cityWeatherForecast: WeatherForecast;
    // @Input() cityWeatherForecast: WeatherForecast;
    groupedForecastDays: Array<Array<WeatherForecast>>;
    activeDay: Array<WeatherForecast>;
    currentDay: Array<WeatherForecast>;

    constructor(private  weatherWidgetService: WeatherWidgetService) {
    }

    ngOnChanges(): void {
        this.initializeWeatherWidget();
    }

    initializeWeatherWidget(): void {
        this.groupedForecastDays = this.weatherWidgetService.groupDates(this.cityWeatherForecast);
        this.activeDay = this.groupedForecastDays[0];
        this.currentDay = this.groupedForecastDays [0];
    }

    onDaySelect(day: Array<WeatherForecast>): void {
        this.activeDay = day;
    }
}
