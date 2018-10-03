import {Component, Input, OnInit} from '@angular/core';
import {Menu} from '../../../shared/models/menu';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  @Input() readonly menuItems: Menu;
  
  constructor() {
  }
  
  ngOnInit() {
  }
}
