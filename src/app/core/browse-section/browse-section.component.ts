import {Component, OnDestroy, OnInit} from '@angular/core';
import {OpenWeatherService} from '../../services/open-weather.service';
import {Forecast, WeatherForecast} from '../../shared/models/weather-forecast';
import {WeatherWidgetService} from '../../services/weather-widget.service';
import {Subscription} from 'rxjs';
import {BboxForecast} from '../../shared/models/bbox-forecast';

@Component({
  selector: 'app-browse-section',
  templateUrl: './browse-section.component.html',
  styleUrls: ['./browse-section.component.scss']
})
export class BrowseSectionComponent implements OnInit, OnDestroy {
  currentPage: number = 1;
  europeForecastSub: Subscription;
  cityForecastSub: Subscription;
  forecasts: Array<BboxForecast>;
  
  constructor(public weatherService: WeatherWidgetService, private openWeatherService: OpenWeatherService) {
  }
  
  ngOnInit(): void {
    const europeBbox = '-19.160156,37.020098,37.792969,68.592487';
    this.europeForecastSub = this.openWeatherService.getBboxForecast(europeBbox).subscribe(
      data => {
        this.forecasts = data.list;
      }
    );
  }
  
  onWeatherCardSelect(city): void {
    this.cityForecastSub = this.openWeatherService.getCityForecast(city.name).subscribe((data: WeatherForecast) => {
      this.weatherService.setCityWeatherForecast(data);
    });
  }
  
  ngOnDestroy(): void {
    if (this.europeForecastSub) {
      this.europeForecastSub.unsubscribe();
    }
    if (this.cityForecastSub) {
      this.cityForecastSub.unsubscribe();
    }
  }
}
