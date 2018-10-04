import {Component, OnDestroy, OnInit} from '@angular/core';
import {OpenWeatherService} from '../../services/open-weather.service';
import { WeatherForecast} from '../../shared/models/weather-forecast';
import {PaginationService} from '../../services/pagination.service';
import {WeatherWidgetService} from '../../services/weather-widget.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-browse-section',
  templateUrl: './browse-section.component.html',
  styleUrls: ['./browse-section.component.scss']
})
export class BrowseSectionComponent implements OnInit, OnDestroy {
  noOfPages: number;
  startPage: number;
  europeForecastSub: Subscription;
  cityForecastSub: Subscription;
  constructor(public weatherService: WeatherWidgetService, public paginationService: PaginationService, private openWeatherService: OpenWeatherService) {
  }
  
  ngOnInit() {
    this.startPage = 1;
    this.europeForecastSub = this.openWeatherService.getEuropeForecast().subscribe(
      data => {
        this.noOfPages = this.paginationService.setItems(data.list);
        this.paginationService.goToSelectedPage(this.startPage);
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
