import {Directive, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHamburgerMenu]'
})
export class HamburgerMenuDirective {
  @Input('appHamburgerMenu') menuElement: HTMLElement;
  @HostListener('click') clickedHamburger() {
    if (this.menuElement.className === 'topnav') {
      this.menuElement.className += ' responsive';
    } else {
      this.menuElement.className = 'topnav';
    }
  }
}
