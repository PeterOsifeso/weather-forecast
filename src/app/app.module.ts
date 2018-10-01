import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CoreModule} from './core/core.module';
import {OpenWeatherService} from './services/open-weather.service';
import {HttpClientModule} from '@angular/common/http';
import {PaginationService} from './services/pagination.service';
import {AgmCoreModule} from '@agm/core';
import {GOOGLE_MAPS_API_CONFIG} from '../environments/environment';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: GOOGLE_MAPS_API_CONFIG.API_KEY
    })
  ],
  providers: [OpenWeatherService, PaginationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
