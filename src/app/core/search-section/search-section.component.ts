import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {OpenWeatherService} from '../../services/open-weather.service';
import {WeatherForecast} from '../../shared/models/weather-forecast';
import {WeatherWidgetService} from '../../services/weather-widget.service';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-search-section',
    templateUrl: './search-section.component.html',
    styleUrls: ['./search-section.component.scss']
})
export class SearchSectionComponent implements OnInit, OnDestroy {
    form: FormGroup;
    searchError: string;
    cityForecastSub: Subscription;
    searchCompleted: boolean;

    constructor(private weatherService: WeatherWidgetService, private openWeatherService: OpenWeatherService) {
    }

    ngOnInit(): void {
        this.form = new FormGroup({
            city: new FormControl('New York', [Validators.required, Validators.minLength(2)])
        });
        this.searchCity(this.form.getRawValue().city);
    }

    searchCity(value): void {
        this.searchCompleted = false;
        this.cityForecastSub = this.openWeatherService.getCityForecast(value).subscribe((data: WeatherForecast) => {
            this.searchError = null;
            this.weatherService.setCityWeatherForecast(data);
            this.searchCompleted = true;
        }, err => {
            this.searchError = value + ' ' + err.error.message;
            this.searchCompleted = true;
        });
    }

    ngOnDestroy() {
        this.cityForecastSub.unsubscribe();
    }
}
