import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-recipients',
  templateUrl: './recipients.component.html',
  styleUrl: './recipients.component.scss'
})
export class RecipientsComponent implements OnInit {
  recipientsCoverImage: string = ""
  recipientsSideImage: string = ""
  


  constructor(private _imageService: ImageService, private _metaTagService: Meta) {}


  ngOnInit(): void {
   // this._imageService.setBannerPrefix();
   // this.aboutCoverImage = this._imageService.loadImage1920x940('who-we-are-home.jpg');
   // this.aboutSideImage = this._imageService.loadImage450x450('about-side-image.jpg');
   this.recipientsCoverImage = this._imageService.loadImage1920x940('loch-march-sponsor.jpg'), 
   //this.sponsorCoverImage = 'https://placehold.co/1920x940'//this._imageService.loadImage1920x940('who-we-are-home.jpg');
    this.recipientsSideImage =  'https://placehold.co/270x284'//'' this._imageService.loadImage450x450('about-side-image.jpg');


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
  }
}