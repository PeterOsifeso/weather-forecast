import {Component, Input, OnInit} from '@angular/core';
import {Forecast} from '../../../shared/models/weather-forecast';

@Component({
  selector: 'app-weather-right',
  templateUrl: './weather-right.component.html',
  styleUrls: ['./weather-right.component.scss']
})
export class WeatherRightComponent implements OnInit {
  @Input() currentDay: Array<Forecast>;
  @Input() activeDay: Array<Forecast>;
  imgUrl = 'http://openweathermap.org/img/w/';
  constructor() { }

  ngOnInit() {
  }

}
