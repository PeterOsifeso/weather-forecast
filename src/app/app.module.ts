import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {OpenWeatherService} from './services/open-weather.service';
import {HttpClientModule} from '@angular/common/http';
import {AgmCoreModule} from '@agm/core';
import {GOOGLE_MAPS_API_CONFIG} from '../environments/environment';
import {RoutingModule} from './routing/routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    CoreModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: GOOGLE_MAPS_API_CONFIG.API_KEY
    }),
    RoutingModule
  ],
  providers: [OpenWeatherService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
