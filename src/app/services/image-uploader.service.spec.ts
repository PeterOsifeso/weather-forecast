import {fakeAsync, TestBed, tick} from '@angular/core/testing';

import { ImageUploaderService } from './image-uploader.service';
import {Observable, observable} from 'rxjs';

describe('ImageUploaderService', () => {
  let service: ImageUploaderService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImageUploaderService]
    }).compileComponents();
    service = TestBed.get(ImageUploaderService);
    });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should return an observable',() => {
    let mockEvent = {target: {files: [new File(['ab'], 'text.txt')]}};;
    expect(service.uploadFile(mockEvent) instanceof Observable).toBeTruthy();
  });
});
