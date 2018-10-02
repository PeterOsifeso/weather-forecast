import { Component, OnInit } from '@angular/core';
import {Menu} from '../../shared/models/menu';

@Component({
  selector: 'app-header-section',
  templateUrl: './header-section.component.html',
  styleUrls: ['./header-section.component.scss']
})
export class HeaderSectionComponent implements OnInit {
  menuItems: Array<Menu>;
  constructor() { }

  ngOnInit() {
    this.menuItems = [
      {name: 'Home', link: '/', fragment: 'home'},
      {name: 'Search', link: '/', fragment: 'search'},
      {name: 'Browse', link: '/', fragment: 'browse'},
      {name: 'Map', link: '/', fragment: 'map'},
      {name: 'Contact', link: '/contact', fragment: ''},
    ]
  }

}
