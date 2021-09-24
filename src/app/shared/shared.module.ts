import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HamburgerMenuDirective} from './directives/hamburger-menu.directive';
import {KelvinToCelciusPipe} from './pipes/kelvin-to-celcius.pipe';
import {UtcDateToRegularPipe} from './pipes/utc-date-to-regular.pipe';
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import {FooterComponent} from './components/footer/footer.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [NavBarComponent, HamburgerMenuDirective, KelvinToCelciusPipe, UtcDateToRegularPipe, FooterComponent],
  exports: [HamburgerMenuDirective, KelvinToCelciusPipe, UtcDateToRegularPipe, NavBarComponent, FooterComponent]
})
export class SharedModule { }
