import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  homeArray:any;

  constructor(private _imageService:ImageService) { }


  ngOnInit(): void {

    ///this._imageService.setBannerPrefix();
    this.homeArray = [
      { // who we are
        imageDesktop:  this._imageService.loadImage1920x940('golf-background.jpeg'),
//        "https://placehold.co/1920x940", //this._imageService.loadImage1920x940('soccer-field.jpeg'),
        imageLogo: this._imageService.loadImage400('dsp-logo-slide-big.png'),
      //  imageDesktop: "https://placehold.co/1920x940",// this._imageService.loadImage1920x940('P1120107.JPG'),
        imageMobile: "https://placehold.co/270x270", //this._imageService.loadImage270x270('P1120107.JPG'),
        title: "Knights of Columbus Annual Charity Golf Tournament",
        message: "<strong>Date:</strong> Tuesday, May 21st, 2024<br>Location: Loch March Golf & Country Club - 1755 Old Carp Rd.<br>Cost: $175 per golfer.",
        link: "/register",
        clickMore: "Register here"
      },
      { // charles video
        imageDesktop: this._imageService.loadImage1920x940('loch-march-sponsor.jpg'), //this._imageService.loadImage1920x940('P1120108.JPG'),
        imageLogo: this._imageService.loadImage100('dsp-logo-slide-big.png'),
        imageMobile: "https://placehold.co/270x270",//this._imageService.loadImage270x270('P1120108.JPG'),
        title: "Become a sponsor",
        message: "Knights of Columbus Council 9544 will be holding their Annual Charity Golf Tournament on Tuesday, May 23rd, 2023, at Loch March Golf & Country Club. This year the Tournament will support The Royal Ottawa Foundation for Mental Health, Kanata Food Cupboard, Shepherds of Good Hope – Hope Living facility in Kanata and Youville Center. Help share in the fundraising efforts by being a Corporate Sponsor and support our neighbours in projects that address the vulnerable, disadvantaged and needy in our community.",
        link: "/sponsor",
        clickMore: "Become a sponsor",
        class: "glightbox"
      },
      { // charles video
        imageDesktop: this._imageService.loadImage1920x940('volunteer-background.jpeg'), //this._imageService.loadImage1920x940('P1120108.JPG'),
        imageLogo: this._imageService.loadImage100('dsp-logo-slide-big.png'),
        imageMobile: "https://placehold.co/270x270",//this._imageService.loadImage270x270('P1120108.JPG'),
        title: "Volunteers Needed",
        message: "Come join us in making this tournament a successful fundraiser",
        link: "/volunteer",
        clickMore: "Become a volunteer",
        class: "glightbox"
      },
    ]
  }
}