import {Component, OnInit} from '@angular/core';
import {Menu} from '../../shared/models/menu';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  menuItems: Array<Menu>;
  
  constructor() {
  }
  
  ngOnInit() {
    this.menuItems = [
      {name: 'Home', link: '/', fragment: 'home'}
    ];
  }
  
}
