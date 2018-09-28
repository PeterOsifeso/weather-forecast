import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CoreModule} from './core/core.module';
import {OpenWeatherService} from './services/open-weather.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    HttpClientModule
  ],
  providers: [OpenWeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
