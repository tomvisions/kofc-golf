import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { ImageService } from '../image.service';
import { Meta } from '@angular/platform-browser';
import { FormBuilder, FormGroup } from '@angular/forms';
import { VolunteerService } from './volunteer.service';

@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrl: './volunteer.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class VolunteerComponent implements OnInit {
  volunteerCoverImage: string = "";
  volunteerSideImage: string = "";
  volunteerForm:FormGroup;


  constructor(private _imageService: ImageService, private _metaTagService: Meta,  private _formBuilder: FormBuilder, private _volunteerService: VolunteerService) {
    this.volunteerForm = this._formBuilder.group({});
  }


  ngOnInit(): void {
    this.volunteerCoverImage = this._imageService.loadImage1920x940('volunteer-background.jpeg'); //'https://placehold.co/1920x940'//this._imageService.loadImage1920x940('who-we-are-home.jpg');
    this.volunteerSideImage =  this._imageService.loadImage450x450('volunteer-side-picture.jpeg');

    this._metaTagService.addTags([
      {
        name: 'keywords',
        content: 'About Knights of Colombus',
      },
      {name: 'robots', content: 'index, follow'},
      {name: 'author', content: 'Tom Cruickshank'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {name: 'date', content: '2019-10-31', scheme: 'YYYY-MM-DD'},
      {charset: 'UTF-8'},
    ]);

      // Create the selected product form
      this.volunteerForm = this._formBuilder.group({
        name: '',
        emailOrPhone: '',

      });
  }

  submitForVolunteer() {
    // Get the product object
    const volunteer = this.volunteerForm.getRawValue();
    volunteer['email_type'] = 'volunteer';
    // Update the product on the server
    this._volunteerService.sendVolunteer(volunteer).subscribe((volunteered:any) => {
      console.log('the academy');
      console.log(volunteered);
      if (volunteered['success']) {
        document.querySelector('div.sponsor-form').classList.add('hide');
        document.querySelector('div.success').classList.remove('hide');
      } else {
        document.querySelector('div.sponsor-form').classList.add('hide');
        document.querySelector('div.fail').classList.remove('hide');
      }
    });
  }
}
