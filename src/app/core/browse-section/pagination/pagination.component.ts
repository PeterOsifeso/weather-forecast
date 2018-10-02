import {Component, Input, OnInit} from '@angular/core';
import {PaginationService} from '../../../services/pagination.service';
import {Forecast} from '../../../shared/models/weather-forecast';
import {P} from '@angular/core/src/render3';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() startPage: number;
  activePage: number;
  pages = [];
  constructor(private paginationService: PaginationService) {
  }
  
  ngOnInit() {
    this.pages.length = this.paginationService.getNoOfPages();
    this.activePage = this.startPage;
  }
  selectPage(pageNo) {
    this.activePage = this.paginationService.goToSelectedPage(pageNo);
  }
  goToPrevious() {
    this.activePage = this.paginationService.goToPreviousPage()
  }
  goToNext() {
    this.activePage = this.paginationService.goToNextPage();
  }
}

