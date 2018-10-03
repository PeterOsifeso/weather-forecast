import {Component, Input, OnInit} from '@angular/core';
import {Forecast} from '../../../shared/models/weather-forecast';

@Component({
  selector: 'app-weather-centre',
  templateUrl: './weather-centre.component.html',
  styleUrls: ['./weather-centre.component.scss']
})
export class WeatherCentreComponent implements OnInit {
  @Input() cityName: string;
  @Input() activeDay: Array<Forecast>;
  
  constructor() {
  }
  
  ngOnInit() {
  }
  
}
