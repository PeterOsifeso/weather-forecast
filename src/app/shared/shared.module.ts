import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HamburgerMenuDirective} from './directives/hamburger-menu.directive';
import { KelvinToCelciusPipe } from './pipes/kelvin-to-celcius.pipe';
import { UtcDateToRegularPipe } from './pipes/utc-date-to-regular.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HamburgerMenuDirective, KelvinToCelciusPipe, UtcDateToRegularPipe],
  exports: [HamburgerMenuDirective, KelvinToCelciusPipe, UtcDateToRegularPipe]
})
export class SharedModule { }
