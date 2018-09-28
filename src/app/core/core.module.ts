import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderSectionComponent } from './header-section/header-section.component';
import { NavBarComponent } from './header-section/nav-bar/nav-bar.component';
import {SharedModule} from '../shared/shared.module';
import { SearchSectionComponent } from './search-section/search-section.component';
import {ReactiveFormsModule} from '@angular/forms';
import {WeatherWidgetModule} from '../weather-widget/weather-widget.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    WeatherWidgetModule
  ],
  declarations: [HeaderSectionComponent, NavBarComponent, SearchSectionComponent],
  exports: [HeaderSectionComponent, SearchSectionComponent, WeatherWidgetModule]
})
export class CoreModule { }
