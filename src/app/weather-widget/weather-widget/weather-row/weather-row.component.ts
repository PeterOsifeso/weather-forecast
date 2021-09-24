import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Forecast} from '../../../shared/models/weather-forecast';

@Component({
  selector: 'app-weather-row',
  templateUrl: './weather-row.component.html',
  styleUrls: ['./weather-row.component.scss']
})
export class WeatherRowComponent implements OnInit {
  @Input() isActive: boolean;
  @Input() day: Array<Forecast>;
  @Output() active: EventEmitter<Array<Forecast>> = new EventEmitter<Array<Forecast>>();
  
  constructor() {
  }
  
  ngOnInit() {
  }
  
  onRowClick() {
    this.active.emit(this.day);
  }
  
}
