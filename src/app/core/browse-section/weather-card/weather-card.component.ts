import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Forecast} from '../../../shared/models/weather-forecast';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent implements OnInit {
  @Input() cityWeather: Forecast;
  @Input() activeWeather?: Forecast;
  @Output() cardSelect: EventEmitter<Forecast> = new EventEmitter<Forecast>();
  imgUrl = 'http://openweathermap.org/img/w/';
  
  constructor() {
  }
  
  ngOnInit() {
  }
  
  onSelect() {
    this.cardSelect.emit(this.cityWeather);
  }
  
}
