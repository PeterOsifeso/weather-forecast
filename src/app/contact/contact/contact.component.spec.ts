import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ContactComponent} from './contact.component';
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
  it('should not upload a file greater than 10mb', () => {
    // Simulate an image upload
    let blob = null;
    const xhr = new XMLHttpRequest();
    xhr.open("GET", '/assets/11mb.jpg');
    xhr.responseType = "blob";
    xhr.onload = function()
    {
      blob = xhr.response;
      let file = new File([blob], '11mb.jpg', {type: 'image/png', lastModified: Date.now()});
      let largeFileEvent = {target: {files: [file]}};
      component.uploadFile(largeFileEvent);
      expect(component.isUploaded).toBeDefined();
      expect(component.uploadError).toBe('The file you selected is above 10MB');
      expect(component.isUploaded).toBeFalsy();
    };
    xhr.send()
  });
  
  it('should upload a file less than 10mb', () => {
    // Simulate an image upload
    let blob = null;
    const xhr = new XMLHttpRequest();
    xhr.open("GET", '/assets/new_york_mobile.jpg');
    xhr.responseType = "blob";
    xhr.onload = function()
    {
      blob = xhr.response;
      let file = new File([blob], '11mb.jpg', {type: 'image/png', lastModified: Date.now()});
      let regularFileEvent = {target: {files: [file]}};
      component.uploadFile(regularFileEvent);
      // TODO - HACK -> Find a better way to do this
      setTimeout(() => {
        expect(component.isUploaded).toBeTruthy();
      }, 2000)
    };
    xhr.send()
  });
  
   it('should submit the form onSubmit', () => {
     component.submitForm({});
     fixture.detectChanges();
     expect(component.contactForm).toBeTruthy()
   });
});
