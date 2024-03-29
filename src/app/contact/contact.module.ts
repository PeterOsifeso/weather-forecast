import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactComponent} from './contact/contact.component';
import {SharedModule} from '../shared/shared.module';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {ReactiveFormsModule} from '@angular/forms';
import {ContactRoutingModule} from './contact-routing.module';
import {ImageUploaderService} from '../services/image-uploader.service';

@NgModule({
  imports: [
    CommonModule,
    ContactRoutingModule,
    SharedModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  declarations: [ContactComponent],
  providers: [ImageUploaderService]
})
export class ContactModule { }
