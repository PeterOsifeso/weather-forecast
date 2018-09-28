import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HamburgerMenuDirective} from './directives/hamburger-menu.directive';
import { KelvinToCelciusPipe } from './pipes/kelvin-to-celcius.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HamburgerMenuDirective, KelvinToCelciusPipe],
  exports: [HamburgerMenuDirective, KelvinToCelciusPipe]
})
export class SharedModule { }
