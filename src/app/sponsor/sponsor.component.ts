import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { ImageService } from '../image.service';
import { Meta } from '@angular/platform-browser';
import { SponsorService } from './sponsor.service';
import { FormBuilder, FormGroup } from '@angular/forms';

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
    {"label":"Yes", "value":"yes"},
    {"label":"No", "value":"no"},
  ];
  sponsorLevelDefaultValue : string = "null";
  sponsorLevelValues: any = [
    {"label":"Sponsor Level?", "value":"null"},
    {"label":"Diamond", "value":"diamond"},
    {"label":"Platnum", "value":"platnum"},
    {"label":"Gold", "value":"gold"},
    {"label":"Silver", "value":"silver"},
    {"label":"Bronze Plus", "value":"bronzeplus"},
    {"label":"Bronze", "value":"bronze"},

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
        content: 'About Dynamic Sports Academy',
      },
      {name: 'robots', content: 'index, follow'},
      {name: 'author', content: 'Tom Cruickshank'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {name: 'date', content: '2019-10-31', scheme: 'YYYY-MM-DD'},
      {charset: 'UTF-8'},
    ]);

        // Create the selected product form
        this.sponsorForm = this._formBuilder.group({
          returningSponsor: '',
          nameOfSponsor: '',
          contact: '',
          email: '',
          mailingAddress: '',
          phone: '',
          level: '',
          specialRequeats: ''
        });
  }

  submitForSponsor() {
    // Get the product object
    const contact = this.sponsorForm.getRawValue();
    contact['email_type'] = 'sponsor';
    // Update the product on the server
    this._sponsorService.sendContact(contact).subscribe((sponsor:any) => {
      console.log('the academy');
      console.log(sponsor);
     if (sponsor['result'] === 'success') {
        document.querySelector('div.contact-form').classList.add('hide');
        document.querySelector('div.success').classList.remove('hide');
      } else {
        document.querySelector('div.contact-form').classList.add('hide');
        document.querySelector('div.fail').classList.remove('hide');
      }
    });
  }
}
