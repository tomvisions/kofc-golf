import { Component, OnInit } from '@angular/core';
import { NgForOf } from '@angular/common';
import { ImageService } from '../image.service';
import { Meta } from '@angular/platform-browser';
import { SponsorsService } from './sponsors.service';

@Component({
  selector: 'app-sponsors',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './sponsors.component.html',
  styleUrl: './sponsors.component.scss',
})
export class SponsorsComponent implements OnInit {
  recipientsCoverImage: string = '';
  recipientsSideImage: string = '';
  sponsors: any;
  sponsorArray: string[] = [];
  sponsorLevels = [
    'diamond',
    'platinum',
    'gold',
    'silver',
    'bronze-plus',
    'bronze',
  ];
  diamondImage: any;
  platinumImage: any;
  goldImage: any;
  silverImage: any;
  bronzePlusImage: any;
  bronzeImage: any;

  constructor(
    private _imageService: ImageService,
    private _metaTagService: Meta,
    private _sponsorsService: SponsorsService,
  ) {}

  ngOnInit(): void {
    this.diamondImage = this._imageService.loadImage250x150(
      'diamond-sponsor.png',
    );
    this.platinumImage = this._imageService.loadImage250x150(
      'platnum-sponsor.png',
    );
    this.goldImage = this._imageService.loadImage250x150('gold-sponsor.png');
    this.silverImage =
      this._imageService.loadImage250x150('silver-sponsor.png');
    this.bronzePlusImage = this._imageService.loadImage250x150(
      'bronze-sponsor-plus.png',
    );
    this.bronzeImage =
      this._imageService.loadImage250x150('bronze-sponsor.png');

    // this._imageService.setBannerPrefix();
    // this.aboutCoverImage = this._imageService.loadImage1920x940('who-we-are-home.jpg');
    // this.aboutSideImage = this._imageService.loadImage450x450('about-side-image.jpg');
    (this.recipientsCoverImage = this._imageService.loadImage1920x940(
      'loch-march-sponsor.jpg',
    )),
      //this.sponsorCoverImage = 'https://placehold.co/1920x940'//this._imageService.loadImage1920x940('who-we-are-home.jpg');
      (this.recipientsSideImage = 'https://placehold.co/270x284'); //'' this._imageService.loadImage450x450('about-side-image.jpg');
    this.sponsors = this._sponsorsService.getSponsors();

    this.sponsorLevels.map((level) => {
      this.sponsorArray[level] = [];
      this.sponsors.map((sponsor) => {
        if (sponsor.level === level) {
          this.sponsorArray[level].push(sponsor);
        }
      });
    });

    console.log('the sponsors');
    console.log(this.sponsorArray);
    this._metaTagService.addTags([
      {
        name: 'keywords',
        content: 'About Knights of Columbus',
      },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Tom Cruickshank' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'date', content: '2019-10-31', scheme: 'YYYY-MM-DD' },
      { charset: 'UTF-8' },
    ]);
  }
}
