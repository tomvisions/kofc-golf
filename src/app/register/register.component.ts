import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {
  golfCoverImage: string = '';
  contactForm:FormGroup;

  constructor(private _imageService: ImageService,  private _formBuilder: FormBuilder, private _contactService: RegisterService) {
    this.contactForm = this._formBuilder.group({});
  }

  ngOnInit() {
    this._imageService.setBannerPrefix();
    this.golfCoverImage = this._imageService.loadImage1920x940('golf-background.jpeg');


    // Create the selected product form
    this.contactForm = this._formBuilder.group({
      name: '',
      subject: '',
      email: '',
      phone: '',
      body: '',
    });
  }


  submitToContactUs() {
    // Get the product object
    const contact = this.contactForm.getRawValue();
    contact['email_type'] = 'register';
    // Update the product on the server
    this._contactService.sendContact(contact).subscribe((academy:any) => {
      console.log('the academy');
      console.log(academy);
/*      if (academy['result'] === 'success') {
        document.querySelector('div.contact-form').classList.add('hide');
        document.querySelector('div.success').classList.remove('hide');
      } else {
        document.querySelector('div.contact-form').classList.add('hide');
        document.querySelector('div.fail').classList.remove('hide');
      } */
    });
  }
}