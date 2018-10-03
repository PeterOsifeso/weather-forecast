import {Component, OnInit} from '@angular/core';
import {OpenWeatherService} from '../../services/open-weather.service';
import {WeatherForecast} from '../../shared/models/weather-forecast';
import {PaginationService} from '../../services/pagination.service';
import {WeatherWidgetService} from '../../services/weather-widget.service';

@Component({
  selector: 'app-browse-section',
  templateUrl: './browse-section.component.html',
  styleUrls: ['./browse-section.component.scss']
})
export class BrowseSectionComponent implements OnInit {
  noOfPages: number;
  startPage: number;
  constructor(public weatherService: WeatherWidgetService, public paginationService: PaginationService, private openWeatherService: OpenWeatherService) {
  }
  
  ngOnInit() {
    this.startPage = 1;
    this.openWeatherService.getEuropeForecast().subscribe(
      data => {
        this.noOfPages = this.paginationService.setItems(data.list);
        this.paginationService.goToSelectedPage(this.startPage);
      }
    );
  }
  
  onWeatherCardSelect(city) {
    this.openWeatherService.getCityForecast(city.name).subscribe((data: WeatherForecast) => {
      this.weatherService.setCityWeatherForecast(data);
    });
  }
  
}
