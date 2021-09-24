import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WeatherWidgetComponent} from './weather-widget/weather-widget.component';
import {SharedModule} from '../shared/shared.module';
import {WeatherRowComponent} from './weather-widget/weather-row/weather-row.component';
import {WeatherCentreComponent} from './weather-widget/weather-centre/weather-centre.component';
import {WeatherRightComponent} from './weather-widget/weather-right/weather-right.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [WeatherWidgetComponent, WeatherRowComponent, WeatherCentreComponent, WeatherRightComponent],
  exports: [WeatherWidgetComponent]
})
export class WeatherWidgetModule { }
