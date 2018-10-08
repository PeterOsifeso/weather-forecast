import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSectionComponent } from './header-section.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('HeaderSectionComponent', () => {
  let component: HeaderSectionComponent;
  let fixture: ComponentFixture<HeaderSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderSectionComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should define menu Items onInit', () => {
    expect(component.menuItems.length).toBeGreaterThanOrEqual(1);
    expect(component.menuItems).toContain({name: 'Home', link: '/', fragment: ''})
  });
});
