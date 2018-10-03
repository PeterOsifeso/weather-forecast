import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input() readonly showScrollToTop: boolean;
  
  constructor() {
  }
  
  ngOnInit() {
  }
  
  scrollToTop() {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }
  
}
