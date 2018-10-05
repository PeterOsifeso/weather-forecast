import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import { ContactComponent } from './contact.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {ImageUploaderService} from '../../services/image-uploader.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {Observable} from 'rxjs';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let imageUploader: ImageUploaderService;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [ReactiveFormsModule, BrowserAnimationsModule],
      providers: [ImageUploaderService]
    })
    .compileComponents();
    imageUploader = TestBed.get(ImageUploaderService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should initialize a new FormGroup on ngInit()', () => {
    fixture.detectChanges();
    expect(component.contactForm).toBeTruthy();
  });
 
  it('should call uploadFile() function from Image uploader service', () => {
    spyOn(imageUploader, 'uploadFile').and.returnValue(Observable.create( observer => observer.next({progress: '100%', isCompleted: true, file: 'Test'})));
    component.uploadFile({});
    fixture.detectChanges();
    expect(imageUploader.uploadFile).toHaveBeenCalled();
    expect(component.isUploaded).toBeTruthy()
  });
   
   it('should submit the form onSubmit', () => {
     component.submitForm({});
     fixture.detectChanges();
     expect(component.contactForm).toBeTruthy()
   });
});
