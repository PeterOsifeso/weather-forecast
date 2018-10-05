import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';

@Injectable()
export class ImageUploaderService {
  fileUploadPercentage: string;
  constructor() {
  }
  
  uploadFile(event): Observable<any> {
    
    return Observable.create(observer => {
      let reader = new FileReader();
      if (event.target.files && event.target.files.length) {
    
        const [file] = event.target.files;
        if (file.size > 10 * 1024 * 1024) {
          observer.error({message: 'The file you selected is above 10MB', error: true});
        } else {
          reader.readAsDataURL(file);
          reader.onprogress = (data) => {
            if (data.lengthComputable) {
              this.fileUploadPercentage = Math.ceil(data.loaded / data.total * 100) + '%';
              observer.next({progress: this.fileUploadPercentage, isCompleted: false, file: reader.result});
            }
          };
          reader.onerror = () => {
            observer.error({message: reader.error.message});
          };
          reader.onload = () => {
            observer.next({progress: this.fileUploadPercentage, isCompleted: true, file: reader.result});
            observer.complete();
          };
        }
      }
    });
  }
}
