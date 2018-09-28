import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OpenWeatherService } from '../../services/open-weather.service';
import {Forecast, WeatherForecast} from '../../shared/models/weather-forecast';

@Component({
  selector: 'app-search-section',
  templateUrl: './search-section.component.html',
  styleUrls: ['./search-section.component.scss']
})
export class SearchSectionComponent implements OnInit {
  form: FormGroup;
  cityWeatherForecast: Array<Forecast>;
  constructor(private openWeatherService: OpenWeatherService) { }

  ngOnInit() {
    this.form = new FormGroup({
      city: new FormControl('New York', [Validators.required, Validators.minLength(2)])
    });
    this.searchCity();
  }
  searchCity() {
    console.log('Searching for ', this.form.getRawValue().city);
    this.openWeatherService.getCityForecast(this.form.getRawValue().city).subscribe( (data: WeatherForecast) => {
      this.filterDates(data);
    }, err => {
      console.log('An errror occurred ', err);
      // TODO - display some error message to user
    });
  }
  filterDates(weatherForecast) {
    this.cityWeatherForecast = [];
    weatherForecast.list.forEach(
      (data: Forecast, i) => {
        if (i % 8 === 0) {
          this.cityWeatherForecast.push(data);
        }
      });
    // TODO -remove console.log
    // console.log('filtered', this.cityWeatherForecast);
  }
}
