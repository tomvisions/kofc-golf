import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RegisterService } from './register.service';
import { Register, RegisterResponse } from './register.type';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {
  golfCoverImage: string = '';
  registrationForm: FormGroup;

  constructor(private _imageService: ImageService, private _formBuilder: FormBuilder, private _registerService: RegisterService) {
    this.registrationForm = this._formBuilder.group({});
  }

  ngOnInit() {
    this._imageService.setBannerPrefix();
    this.golfCoverImage = this._imageService.loadImage1920x940('golf-background.jpeg');


    // Create the selected product form
    this.registrationForm = this._formBuilder.group({
      name: '',
      email: '',
      phone: '',
      body: ''
    });
  }


  submitToRegister() {

    const register: Register = this.registrationForm.getRawValue();
    register.email_type = 'register';

    this._registerService.sendRegistration(register).subscribe((register: any) => {

      if (register.success) {
        document.querySelector('div.contact-form')?.classList.add('hide');
        document.querySelector('div.success')?.classList.remove('hide');
      } else {
        document.querySelector('div.contact-form')?.classList.add('hide');
        document.querySelector('div.fail')?.classList.remove('hide');
        
      } 
    }); 
  }
}