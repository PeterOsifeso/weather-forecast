import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {OpenWeatherService} from '../../services/open-weather.service';
import {Forecast, WeatherForecast} from '../../shared/models/weather-forecast';
import {WeatherWidgetService} from '../../services/weather-widget.service';

@Component({
  selector: 'app-search-section',
  templateUrl: './search-section.component.html',
  styleUrls: ['./search-section.component.scss']
})
export class SearchSectionComponent implements OnInit {
  form: FormGroup;
  searchError: string;
  
  constructor(private weatherService: WeatherWidgetService, private openWeatherService: OpenWeatherService) {
  }
  
  ngOnInit(): void {
    this.form = new FormGroup({
      city: new FormControl('New York', [Validators.required, Validators.minLength(2)])
    });
    this.searchCity(this.form.getRawValue().city);
  }
  
  searchCity(value): void {
    this.openWeatherService.getCityForecast(value).subscribe((data: WeatherForecast) => {
      this.searchError = null;
      this.weatherService.setCityWeatherForecast(data);
    }, err => {
      this.searchError = this.form.getRawValue().city + ' ' + err.error.message;
    });
  }
  
}
