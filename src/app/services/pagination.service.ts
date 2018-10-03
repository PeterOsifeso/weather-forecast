import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {
  private noOfItemsPerPage: number;
  private noOfPages: number;
  currentPage: number;
  items: Array<any>;
  selectedPageContent: Array<any>;
  
  private subject: Subject<any> = new Subject();
  observable$: Observable<any> = this.subject.asObservable();
  
  constructor() {
  }
  
  setItems(items: Array<any>, noOfPages?: number): number {
    this.items = items;
    this.subject.next(this.items);
    this.noOfItemsPerPage = noOfPages ? noOfPages : 10;
    this.calcNoOfPages(items);
    return this.noOfPages;
  }
  
  getItems(): Observable<any> {
    return this.observable$;
  }
  
  calcNoOfPages(items: Array<any>): void {
    this.noOfPages = Math.floor(items.length / this.noOfItemsPerPage);
    this.currentPage = 1;
  }
  
  getNoOfPages(): number {
    return this.noOfPages;
  }
  
  goToNextPage(): number {
    if (this.currentPage < this.noOfPages) {
      this.currentPage++;
      this.selectedPageContent = this.items.slice((this.currentPage) * this.noOfItemsPerPage, (this.currentPage + 1) * this.noOfItemsPerPage);
      return this.currentPage;
    }
    return this.currentPage;
  }
  
  goToPreviousPage(): number {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.selectedPageContent = this.items.slice((this.currentPage - 1) * this.noOfItemsPerPage, this.currentPage * this.noOfItemsPerPage);
      return this.currentPage;
    }
    return this.currentPage;
  }
  
  goToSelectedPage(pageNo: number): number {
    this.selectedPageContent = this.items.slice(pageNo * this.noOfItemsPerPage, (pageNo + 1) * this.noOfItemsPerPage);
    this.currentPage = pageNo;
    return this.currentPage;
  }
  getSelectedPageContent() {
    return this.selectedPageContent;
  }
}
