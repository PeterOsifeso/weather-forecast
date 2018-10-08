import {HamburgerMenuDirective} from './hamburger-menu.directive';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {DebugElement} from '@angular/core';
import {NavBarComponent} from '../components/nav-bar/nav-bar.component';
import {By} from '@angular/platform-browser';
import {RouterTestingModule} from '@angular/router/testing';

describe('HamburgerMenuDirective', () => {
  let directive: HamburgerMenuDirective;
  let navElClickable: DebugElement;
  let navElRespond: DebugElement;
  let fixture: ComponentFixture<NavBarComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [NavBarComponent, HamburgerMenuDirective],
      providers: [HamburgerMenuDirective]
    }).compileComponents();
    directive = TestBed.get(HamburgerMenuDirective);
    fixture = TestBed.createComponent(NavBarComponent);
    navElClickable = fixture.debugElement.query(By.css('.icon'));
    navElRespond = fixture.debugElement.query(By.css('.topnav'));
    fixture.detectChanges();
  });
  
  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });
  
  it('expect to add className "active" to menu element on first click', () => {
    expect(navElRespond.nativeElement.classList).not.toContain('responsive');
    navElClickable.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(navElRespond.nativeElement.classList).toContain('responsive');
  });
  
  it('expect to remove className "active" to menu element on second click', () => {
    expect(navElRespond.nativeElement.classList).not.toContain('responsive');
    navElClickable.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(navElRespond.nativeElement.classList).toContain('responsive');
    navElClickable.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(navElRespond.nativeElement.classList).not.toContain('responsive');
  });
});
