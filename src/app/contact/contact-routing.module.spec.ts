import { ContactRoutingModule } from './contact-routing.module';
import {fakeAsync, TestBed, tick} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {ContactComponent} from './contact/contact.component';
import {Router, Routes} from '@angular/router';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {Location} from '@angular/common';

describe('ContactRoutingModule', () => {
  let contactRoutingModule: ContactRoutingModule;
  let routes: Routes = [
    {path: '', component: ContactComponent},
    {path: '**', redirectTo: '', pathMatch: 'full'}
  ];
  let location: Location;
  let router: Router;
  
  beforeEach(() => {
    contactRoutingModule = new ContactRoutingModule();
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes), ReactiveFormsModule],
      declarations: [ContactComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    router = TestBed.get(Router);
    location = TestBed.get(Location);
    router.initialNavigation();
  });

  it('should create an instance', () => {
    expect(contactRoutingModule).toBeTruthy();
  });
  
  it('should create contact Component', () => {
    expect(location.path()).toBe('');
    expect(ContactComponent).toBeTruthy();
  });
  
});
