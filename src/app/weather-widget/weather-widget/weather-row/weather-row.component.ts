import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Forecast} from '../../../shared/models/weather-forecast';

@Component({
  selector: 'app-weather-row',
  templateUrl: './weather-row.component.html',
  styleUrls: ['./weather-row.component.scss']
})
export class WeatherRowComponent implements OnInit {
  @Input() isActive;
  @Input() day: Forecast;
  @Output() active: EventEmitter<Forecast> = new EventEmitter<Forecast>();
  constructor() { }

  ngOnInit() {
  }
  onRowClick() {
    this.active.emit(this.day);
    // console.log('day clicked is ', this.day);
  }

}
