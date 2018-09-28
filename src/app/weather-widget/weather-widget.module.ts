import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherWidgetComponent } from './weather-widget/weather-widget.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [WeatherWidgetComponent],
  exports: [WeatherWidgetComponent]
})
export class WeatherWidgetModule { }
