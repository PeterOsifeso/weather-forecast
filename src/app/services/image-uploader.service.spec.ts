import { TestBed } from '@angular/core/testing';

import { ImageUploaderService } from './image-uploader.service';

describe('ImageUploaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [ImageUploaderService]
  }));

  it('should be created', () => {
    const service: ImageUploaderService = TestBed.get(ImageUploaderService);
    expect(service).toBeTruthy();
  });
  
  // it('should not upload a file size greater than 10mb', () => {
  //
  //   // Simulate an image upload
  //   let blob = null;
  //   const xhr = new XMLHttpRequest();
  //   xhr.open("GET", '/assets/11mb.jpg');
  //   xhr.responseType = "blob";//force the HTTP response, response-type header to be blob
  //   xhr.onload = function()
  //   {
  //     blob = xhr.response;//xhr.response is now a blob object
  //     let file = new File([blob], '11mb.jpg', {type: 'image/png', lastModified: Date.now()});
  //     let largeFileEvent = {target: {files: [file]}};
  //     component.uploadFile(largeFileEvent);
  //     expect(component.isUploaded).toBeFalsy();
  //   };
  //   xhr.send()
  // });
});
