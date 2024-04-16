import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { ImageService } from '../image.service';
import { Meta } from '@angular/platform-browser';
import { SponsorService } from './sponsor.service';
import {AbstractControl, FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-sponsor',
  templateUrl: './sponsor.component.html',
  styleUrl: './sponsor.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class SponsorComponent implements OnInit {
  private _unsubscribeAll: Subject<any> = new Subject<any>();
  sponsorCoverImage: string = ""
  sponsorSideImage: string = ""
  sponsorLevel:any;
  sponsorLevelDefault: string = 'diamond'
  sponsorForm:FormGroup;
  returningSponsorDefaultValue : any = "null";
  returningSponsorValues: any = [
    {"label":"Returning Sponsor?", "value":"null"},
    {"label":"Yes", "value":"yes I am returning Sponsor"},
    {"label":"No", "value":"no I a not a returning Sponsor"},
  ];
  sponsorLevelDefaultValue : string = "null";
  sponsorLevelValues: any = [
    {"label":"Sponsor Level?", "value":"null"},
    {"label":"Diamond", "value":"diamond level"},
    {"label":"Platnum", "value":"platnum level"},
    {"label":"Gold", "value":"gold level"},
    {"label":"Silver", "value":"silver level"},
    {"label":"Bronze Plus", "value":"bronzeplus level"},
    {"label":"Bronze", "value":"bronze level"},

  ];


  constructor(private _imageService: ImageService, private _metaTagService: Meta, private _sponsorService: SponsorService,  private _formBuilder: FormBuilder) {
    this.sponsorForm = this._formBuilder.group({});
  }


  ngOnInit(): void {
   // this._imageService.setBannerPrefix();
   // this.aboutCoverImage = this._imageService.loadImage1920x940('who-we-are-home.jpg');
   // this.aboutSideImage = this._imageService.loadImage450x450('about-side-image.jpg');
   this.sponsorCoverImage = this._imageService.loadImage1920x940('loch-march-sponsor.jpg'),
   //this.sponsorCoverImage = 'https://placehold.co/1920x940'//this._imageService.loadImage1920x940('who-we-are-home.jpg');
    this.sponsorSideImage =  'https://placehold.co/270x284'//'' this._imageService.loadImage450x450('about-side-image.jpg');
    this.sponsorLevel = this._sponsorService.getSponsors()

    this._metaTagService.addTags([
      {
        name: 'keywords',
        content: 'About Knights of Columbus',
      },
      {name: 'robots', content: 'index, follow'},
      {name: 'author', content: 'Tom Cruickshank'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {name: 'date', content: '2019-10-31', scheme: 'YYYY-MM-DD'},
      {charset: 'UTF-8'},
    ]);


    this.sponsorForm =  this._formBuilder.group({
      returningSponsor: this._formBuilder.control('',[
        Validators.required,
        Validators.minLength(26),
        Validators.maxLength(30),
        notNullValidator
        ]),
      nameOfSponsor: this._formBuilder.control('',[
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20)
      ]),
      contact: this._formBuilder.control('',[
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20)
      ]),
      email: this._formBuilder.control('',[
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20)
      ]),
      phone: this._formBuilder.control('',[
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20)
      ]),
      level:this._formBuilder.control('',[
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20)
      ]),
      specialRequests: this._formBuilder.control('',[
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20)
      ]),
  })
  }

  get sponsorsForm() {
    return this.sponsorForm;
  }

  submitForSponsor() {
    // Get the product object


    for (const control of Object.keys(this.sponsorForm.controls)) {

        this.sponsorForm.controls[control].markAsTouched();
//        console.log(control);
  //    console.log(this.sponsorForm.controls[control].errors)
    }


    //console.log('the form')
    //console.log(this.sponsorForm)
    const contact = this.sponsorForm.getRawValue();
    contact['email_type'] = 'sponsor';

    // Update the product on the server
    this._sponsorService.sendContact(contact).subscribe((sponsor:any) => {
     if (sponsor['success']) {
        document.querySelector('div.sponsor-form').classList.add('hide');
        document.querySelector('div.success').classList.remove('hide');
      } else {
        document.querySelector('div.sponsor-form').classList.add('hide');
        document.querySelector('div.fail').classList.remove('hide');
      }
    });
  }
}

export function notNullValidator(control: AbstractControl): { [key: string]: boolean } | null {
  if (control.value !== null) {
    return null; // valid
  } else {
    return { 'notNull': true }; // invalid
  }
}
