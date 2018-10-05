import {Component, OnInit} from '@angular/core';
import {Menu} from '../../shared/models/menu';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {faUser, faEnvelope} from '@fortawesome/free-regular-svg-icons';
import {animate, style, transition, trigger} from '@angular/animations';
import {ImageUploaderService} from '../../services/image-uploader.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-contact',
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateX(100%)', opacity: 0}),
          animate('500ms', style({transform: 'translateX(0)', opacity: 1}))
        ])
      ]
    ),
    trigger(
      'leaveAnimation', [
        transition(':leave', [
          style({transform: 'translateX(0)', opacity: 1}),
          animate('500ms', style({transform: 'translateX(100%)', opacity: 0}))
        ])
      ]
    )
  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  menuItems: Array<Menu>;
  contactForm: FormGroup;
  faUser = faUser;
  faEnvelope = faEnvelope;
  
  fileUploadPercentage: string = '0%';
  isUploading: boolean;
  isUploaded: boolean;
  uploadError: string;
  sub: Subscription;
  constructor(private imageUploaderService: ImageUploaderService) {
  }
  
  ngOnInit(): void {
    this.menuItems = [
      {name: 'Home', link: '/', fragment: 'home'}
    ];
    
    this.contactForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email, Validators.required]),
      message: new FormControl('', [Validators.required, Validators.minLength(10)]),
      file: new FormControl(null, [Validators.required])
    });
  }
  
  uploadFile(event): void {
    this.uploadError = null;
    this.sub = this.imageUploaderService.uploadFile(event).subscribe(
      data => {
        console.log('data', data);
        if (data.progress && !data.isCompleted) {
          this.isUploading = true;
          this.fileUploadPercentage = data.progress;
          this.uploadError = null;
        } else {
          this.isUploading = false;
          this.isUploaded = true;
          this.contactForm.get('file').setValue(data.file);
        }
      }, err => {
        this.uploadError = err.message;
        this.isUploaded = false;
        if(this.sub)
          this.sub.unsubscribe();
      });
  }
  
  submitForm(formValue): void {
    console.log('Submit form to back end', formValue);
  }
}
