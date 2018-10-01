import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {
  private noOfItemsPerPage: number;
  private noOfPages: number;
  currentPage: number;
  items: Array<any>;
  selectedPageContent: Array<any>;

  constructor() {
  }

  setItems(items: Array<any>, noOfPages?: number): number {
    this.items = items;
    this.noOfItemsPerPage = noOfPages ? noOfPages : 10;
    this.calcNoOfPages(items);
    return this.noOfPages;
  }

  calcNoOfPages(items: Array<any>) {
    this.noOfPages = Math.floor(items.length / this.noOfItemsPerPage);
    this.currentPage = 1;
  }

  goToNextPage() {
    if (this.currentPage < this.noOfPages) {
      this.currentPage++;
      this.selectedPageContent = this.items.slice((this.currentPage) * this.noOfItemsPerPage, (this.currentPage + 1) * this.noOfItemsPerPage);
      return this.currentPage;
    }
    return this.currentPage;
  }

  goToPreviousPage() {
    if (this.currentPage > 1) {
      console.log('going to previous page');
      this.currentPage--;
      this.selectedPageContent = this.items.slice((this.currentPage - 1) * this.noOfItemsPerPage, this.currentPage * this.noOfItemsPerPage);
      return this.currentPage;
    }
    return this.currentPage;
  }

  goToSelectedPage(pageNo: number) {
    // console.log('Going to page ', pageNo);
    this.selectedPageContent = this.items.slice(pageNo * this.noOfItemsPerPage, (pageNo + 1) * this.noOfItemsPerPage);
    this.currentPage = pageNo;
    return this.currentPage;
  }
}
