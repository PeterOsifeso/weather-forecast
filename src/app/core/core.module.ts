import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderSectionComponent} from './header-section/header-section.component';
import {NavBarComponent} from './header-section/nav-bar/nav-bar.component';
import {SharedModule} from '../shared/shared.module';
import {SearchSectionComponent} from './search-section/search-section.component';
import {ReactiveFormsModule} from '@angular/forms';
import {WeatherWidgetModule} from '../weather-widget/weather-widget.module';
import {BrowseSectionComponent} from './browse-section/browse-section.component';
import {WeatherCardComponent} from './browse-section/weather-card/weather-card.component';
import {PaginationComponent} from './browse-section/pagination/pagination.component';
import {MapSectionComponent} from './map-section/map-section.component';
import {AgmCoreModule} from '@agm/core';
import {AgmSnazzyInfoWindowModule} from '@agm/snazzy-info-window';
import {RouterModule} from '@angular/router';
import {ContactComponent} from './contact/contact.component';
import {FooterComponent} from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    WeatherWidgetModule,
    AgmCoreModule,
    AgmSnazzyInfoWindowModule,
    RouterModule,
    FontAwesomeModule,
    BrowserAnimationsModule
  ],
  declarations: [HeaderSectionComponent, NavBarComponent, SearchSectionComponent, BrowseSectionComponent, WeatherCardComponent, PaginationComponent, MapSectionComponent, ContactComponent, FooterComponent],
  exports: [HeaderSectionComponent, SearchSectionComponent, WeatherWidgetModule, BrowseSectionComponent, MapSectionComponent, FooterComponent]
})
export class CoreModule {
}
