import {Component, OnDestroy, OnInit} from '@angular/core';
import {OpenWeatherService} from '../../services/open-weather.service';
import {Forecast, WeatherForecast} from '../../shared/models/weather-forecast';
import {WeatherWidgetService} from '../../services/weather-widget.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-browse-section',
  templateUrl: './browse-section.component.html',
  styleUrls: ['./browse-section.component.scss']
})
export class BrowseSectionComponent implements OnInit, OnDestroy {
  currentPage: number = 1;
  europeForecastSub: Subscription;
  cityForecastSub: Subscription;
  forecasts: Array<Forecast>;
  
  constructor(public weatherService: WeatherWidgetService, private openWeatherService: OpenWeatherService) {
  }
  
  ngOnInit() {
    const europeBbox = '-19.160156,37.020098,37.792969,68.592487';
    this.europeForecastSub = this.openWeatherService.getBboxForecast(europeBbox).subscribe(
      data => {
        this.forecasts = data.list;
      }
    );
  }
  
  onWeatherCardSelect(city) {
    this.cityForecastSub = this.openWeatherService.getCityForecast(city.name).subscribe((data: WeatherForecast) => {
      this.weatherService.setCityWeatherForecast(data);
    });
  }
  
  ngOnDestroy() {
    if (this.europeForecastSub) {
      this.europeForecastSub.unsubscribe();
    }
    if (this.cityForecastSub) {
      this.cityForecastSub.unsubscribe();
    }
  }
}
