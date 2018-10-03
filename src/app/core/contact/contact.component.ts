import {Component, OnInit} from '@angular/core';
import {Menu} from '../../shared/models/menu';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {faUser, faEnvelope} from '@fortawesome/free-regular-svg-icons';
import {animate, style, transition, trigger} from '@angular/animations';

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
  
  constructor() {
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
    let reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      
      const [file] = event.target.files;
      if (file.size > 10 * 1024 * 1024) {
        // file to large exceeds 10MB
        this.uploadError = 'The file you selected is above 10MB';
        this.isUploading = false;
        this.isUploaded = false;
        this.contactForm.get('file').setValue(null);
        return;
      }
      this.uploadError = null;
      reader.readAsDataURL(file);
      reader.onprogress = (data) => {
        this.isUploading = true;
        if (data.lengthComputable) {
          this.fileUploadPercentage = Math.ceil(data.loaded / data.total * 100) + '%';
        }
      };
      reader.onload = () => {
        this.contactForm.get('file').setValue(file);
        this.isUploading = false;
        this.isUploaded = true;
      };
    }
  }
  
  submitForm(form): void {
    console.log('Submit form tpo back end', form);
  }
}
