import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderSectionComponent} from './header-section/header-section.component';
import {SharedModule} from '../shared/shared.module';
import {SearchSectionComponent} from './search-section/search-section.component';
import {ReactiveFormsModule} from '@angular/forms';
import {WeatherWidgetModule} from '../weather-widget/weather-widget.module';
import {BrowseSectionComponent} from './browse-section/browse-section.component';
import {WeatherCardComponent} from './browse-section/weather-card/weather-card.component';
import {MapSectionComponent} from './map-section/map-section.component';
import {AgmCoreModule, GoogleMapsAPIWrapper} from '@agm/core';
import {AgmSnazzyInfoWindowModule} from '@agm/snazzy-info-window';
import {AgmOverlays} from 'agm-overlays';
import {AgmJsMarkerClustererModule} from '@agm/js-marker-clusterer';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        ReactiveFormsModule,
        WeatherWidgetModule,
        AgmCoreModule,
        AgmSnazzyInfoWindowModule,
        AgmOverlays,
        AgmJsMarkerClustererModule,
        NgxPaginationModule
    ],
    declarations: [HeaderSectionComponent, SearchSectionComponent, BrowseSectionComponent, WeatherCardComponent, MapSectionComponent],
    exports: [HeaderSectionComponent, SearchSectionComponent, WeatherWidgetModule, BrowseSectionComponent, MapSectionComponent],
    providers: [GoogleMapsAPIWrapper]
})
export class CoreModule {
}
