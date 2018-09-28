import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-weather-right',
  templateUrl: './weather-right.component.html',
  styleUrls: ['./weather-right.component.scss']
})
export class WeatherRightComponent implements OnInit {
  @Input() currentDay;
  @Input() activeDay;
  imgUrl = 'http://openweathermap.org/img/w/'
  constructor() { }

  ngOnInit() {
  }

}
